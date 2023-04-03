
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: environment.KEYCLOAK_URL,
          realm: 'testing2',
          clientId: 'frontend'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
        }
      });
  }
  