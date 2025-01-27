import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from '../environments/environment.prod'; // change this to ../environments/environment.ts when in development

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { UserModule} from "./user/user.module";
import { LayoutModule} from "./layout/layout.module";
import {ApiConfigService} from "./app.config";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule.forRoot({
      domain: environment.AUTH0_DOMAIN,
      clientId: environment.AUTH0_CLIENT_ID,
      authorizationParams: {
        audience: environment.AUTH0_AUDIENCE,
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [
          `${environment.api_url}/*`
        ]
      }
    }),
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    UserModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    ApiConfigService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
