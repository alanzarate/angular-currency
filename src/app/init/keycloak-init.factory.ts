
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://172.18.8.229:8080',
          realm: 'testing2',
          clientId: 'frontend'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
        }
      });
  }
  