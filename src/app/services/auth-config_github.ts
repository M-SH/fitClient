import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig_github: AuthConfig = {
  issuer: 'https://api.github.com/',
  redirectUri: 'http://localhost:4200/dashboard',
  clientId: 'Ov23liY7J05RLo9fKv8b',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
