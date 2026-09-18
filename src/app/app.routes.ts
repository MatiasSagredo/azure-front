import { Routes } from '@angular/router';
import { Store } from './store/store';
import { Callback } from './callback/callback';

export const routes: Routes = [
  { path: '', component:Store },
  { path: 'search', component:Store },
  { path: 'callback', component:Callback}

];
