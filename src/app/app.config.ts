import { provideRouter }     from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app-routing.module';

export const appConfig = {
  providers: [
    provideRouter(routes),   
    provideHttpClient()      
  ]
};
