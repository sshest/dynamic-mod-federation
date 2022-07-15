import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {ModuleFederationManifest} from "./utils/types/moduleFederationManifest";
import {CustomManifest} from "./utils/configureRoutes";

if (environment.production) {
  enableProdMode();
}

export function bootstrapShell(manifest : CustomManifest) {
  return platformBrowserDynamic([{
    provide: ModuleFederationManifest,
    useValue: manifest
  }])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
