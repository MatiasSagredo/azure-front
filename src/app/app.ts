import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signInWithRedirect,fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


  protected readonly title = signal('VidalStoreFront');
  protected readonly LoginState = signal(false)
  
  constructor(){
    this.checkGroups()

    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signInWithRedirect' || payload.event === 'signedOut') {
        this.checkGroups();
      }
    });

  }

  protected async login(){
    await signInWithRedirect();
  }

  protected async checkGroups(){
      const { tokens } = await fetchAuthSession();
      const groups = (tokens?.accessToken?.payload['cognito:groups'] ?? []) as string[];
      console.log(groups)
      //this.esBibliotecario.set(grupos.includes('bibliotecarios'));
  }



}
