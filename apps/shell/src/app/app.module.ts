import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {APP_ROUTES} from "./app.routes";
import {CustomManifest} from "../utils/configureRoutes";
import {ModuleFederationManifest} from "../utils/types/moduleFederationManifest";

export const ROUTER_MANIFEST = new InjectionToken<ModuleFederationManifest>('module-federation-manifest');

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [
    {
      provide: ROUTER_MANIFEST,
      useFactory: (manifest: CustomManifest) => manifest,
      deps: [ModuleFederationManifest]
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
