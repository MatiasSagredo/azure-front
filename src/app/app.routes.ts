import { Routes } from '@angular/router';
import { Store } from './store/store';
import { Library } from './library/library';
import { Callback } from './callback/callback';
import { sesionGuard } from './auth/session.guard';
import { Auditing } from './auditing/auditing';

export const routes: Routes = [
  { path: '', component:Store },
  { path: 'search', component:Store },
  { path: 'callback', component:Callback},

  { path: 'library', component:Library, canActivate:[sesionGuard] },
  { path: 'auditing', component:Auditing, canActivate:[sesionGuard] },
  

];
