import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Router} from "@angular/router";
import {configureRoutes, CustomManifest, CustomRemoteConfig} from "../utils/configureRoutes";
import {ROUTER_MANIFEST} from "./app.module";

@Component({
  selector: 'dyn-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router, @Optional() @Inject(ROUTER_MANIFEST) private manifest: CustomManifest){}

  async ngOnInit(): Promise<void> {
    const routes = configureRoutes(this.manifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(this.manifest);
  }
}
