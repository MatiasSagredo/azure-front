import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { signInWithRedirect, fetchAuthSession, signOut } from 'aws-amplify/auth';
import { Hub, } from 'aws-amplify/utils';
import { LoginStates, sessionType } from './auth/session.guard';



@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly LoginStates = LoginStates

  protected readonly title = signal('VidalStoreFront');
  protected readonly sessionType = sessionType;

  constructor() {
    this.checkGroups()

    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signInWithRedirect' || payload.event === 'signedOut') {
        this.checkGroups();
      }
    });

  }

  protected async login() {
    await signInWithRedirect();
  }

  protected async checkGroups() {
    const { tokens } = await fetchAuthSession();
    const groups = (tokens?.accessToken?.payload['cognito:groups'] ?? []) as string[];
    if (groups.includes('jugadores')) sessionType.set(LoginStates.LoginUser)
    if (groups.includes('editores')) sessionType.set(LoginStates.LoginEditor)
    if (groups.includes('administradores')) sessionType.set(LoginStates.LoginAdmin)
    console.log(groups)
  }

  protected async logout() {
    await signOut()

    sessionType.set(LoginStates.LoginNone)
  }

}
