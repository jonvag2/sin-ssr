import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/* notificaciones */
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { timeout } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideRouter(
      routes,
      withViewTransitions()
    ),
    provideAnimations(), // required animations providers
    provideToastr({timeOut: 6000, positionClass: 'toast-bottom-right', preventDuplicates: true}), // Toastr providers
  ]
};
