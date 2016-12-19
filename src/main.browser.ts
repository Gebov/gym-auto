/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then(decorateModuleRef)
	.catch(err => console.error(err));
