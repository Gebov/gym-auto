import { NgModule, ApplicationRef } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from "./modules/security";
import { AdminModule } from "./modules/admin";
import { EffectsModule } from '@ngrx/effects';
import { getReducers } from "./state";
import { HTTP_PROVIDER_OVERRIDES } from "./data/index";
import { ROUTES } from './app.routes';
import { COMPONENTS, APP_COMPONENT } from "./components";
import { AppSettings } from './data';
import { VALIDATORS } from "./forms";
import { AuthEffects } from "./modules/security/state/auth.effects";

import { SERVICES } from "./services";

const APP_PROVIDERS = [
	AppSettings
];

@NgModule({
  bootstrap: [ APP_COMPONENT ],
  declarations: [
    ...COMPONENTS,
		...VALIDATORS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AuthModule,
		AdminModule,
    RouterModule.forRoot(ROUTES),
		StoreModule.provideStore(getReducers()),
		EffectsModule.runAfterBootstrap(AuthEffects)
  ],
  providers: [
    APP_PROVIDERS,
		HTTP_PROVIDER_OVERRIDES,
		...SERVICES
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
	}
}
