import { setRemoteDefinitions } from '@nrwl/angular/mf';
// import {CustomManifest, CustomRemoteConfig} from "./utils/configureRoutes";

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((microFrontendDefinitions: {[x: string]: string}) => {
    setRemoteDefinitions(microFrontendDefinitions);
    return fetch('/assets/routes-manifest.json');
  })
  .then(res => res.json())
  .then((definitions) => import('./bootstrap')
    .then(m => m.bootstrapShell(definitions))
  )
  .catch((err) => console.error(err));
