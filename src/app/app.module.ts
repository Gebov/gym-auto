import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { getReducers, addReducer } from "./state";

import { AuthModule } from "./security/index";

/*
 * Platform and Environment providers/directives/pipes
 */
import { HTTP_PROVIDER_OVERRIDES } from "./data/index";
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { AppSettings } from './data';
import { VALIDATORS } from "./forms/index";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from "./security/state/auth.effects";

// Application wide providers
const APP_PROVIDERS = [
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
		StoreModule.provideStore(getReducers()),
		EffectsModule.runAfterBootstrap(AuthEffects)
  ],
  providers: [
    APP_PROVIDERS,
		HTTP_PROVIDER_OVERRIDES
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
	}
}
