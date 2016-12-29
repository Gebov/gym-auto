import { NgModule, ApplicationRef } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from "./security/index";
import { EffectsModule } from '@ngrx/effects';

import { getReducers } from "./state";
import { HTTP_PROVIDER_OVERRIDES } from "./data/index";
import { ROUTES } from './app.routes';
import { COMPONENTS, APP_COMPONENT } from "./components";
import { AppSettings } from './data';
import { VALIDATORS } from "./forms/index";
import { AuthEffects } from "./security/state/auth.effects";

// Application wide providers
const APP_PROVIDERS = [
	AppSettings
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ APP_COMPONENT ],
  declarations: [
    ...COMPONENTS,
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
