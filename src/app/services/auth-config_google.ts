import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig_google: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: 'http://localhost:4200/dashboard',
  clientId: '986118818597-gkqfm26kuvd9v802dn7peiik5etioscm.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
