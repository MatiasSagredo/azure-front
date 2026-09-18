import { Routes } from '@angular/router';
import { Store } from './store/store';

export const routes: Routes = [
  { path: '', component:Store },
  { path: 'search', component:Store }

];
