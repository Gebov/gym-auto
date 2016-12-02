import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { getReducers } from "./reducers";

import { AuthModule } from "./security/index";
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { HTTP_PROVIDER_OVERRIDES } from "./data/index";
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { AppSettings } from './data';
import { VALIDATORS } from "./forms/index";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
	AppSettings
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
		...VALIDATORS
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
		AuthModule,
    RouterModule.forRoot(ROUTES),
		provideStore(getReducers())
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
		HTTP_PROVIDER_OVERRIDES
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
	}
}
