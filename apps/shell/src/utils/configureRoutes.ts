import { loadRemoteModule } from "@nrwl/angular/mf";
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app/app.routes';

export type RemoteConfig = {
  remoteEntry: string;
}

export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
}

export type Manifest<T extends RemoteConfig> = {
  [x: string]: T
}

export type CustomManifest = Manifest<CustomRemoteConfig>;

export function configureRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options)
    .map(key => {
      const entry = options[key];
      return {
        path: entry.routePath,
        loadChildren: () => loadRemoteModule(key, entry.exposedModule)
          .then(m => m[entry.ngModuleName])
      }
    });
  return [...APP_ROUTES, ...lazyRoutes];
}
