import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

 import { Amplify } from 'aws-amplify';

 Amplify.configure({
   Auth: {
     Cognito: {
       userPoolId:       'east-1_CYMenWV1s',
       userPoolClientId: '1an4s0e22ro818pr8beec2oei0',
       loginWith: {
         oauth: {
           domain:          'us-east-1cymenwv1s.auth.us-east-1.amazoncognito.com',
           scopes:          ['openid', 'email'],
           redirectSignIn:  ['http://localhost:4200/callback', 'https://vidalstore-gw-rg-vidalstore.brazilsouth.cloudapp.azure.com/callback'],
           redirectSignOut: ['http://localhost:4200', 'https://vidalstore-gw-rg-vidalstore.brazilsouth.cloudapp.azure.com/'],
           responseType:    'code',
         },
       },
     },
   },
 });

import 'aws-amplify/auth/enable-oauth-listener';1
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
