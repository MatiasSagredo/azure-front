import { Routes } from '@angular/router';
import { Store } from './store/store';
import { Library } from './library/library';

import { Callback } from './callback/callback';
import { sesionGuard } from './auth/session.guard';

export const routes: Routes = [
  { path: '', component:Store },
  { path: 'search', component:Store },
  { path: 'callback', component:Callback},

  { path: 'library', component:Library, canActivate:[sesionGuard] },

];
