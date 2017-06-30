import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    // Once Angular bootstrap is complete then we bootstrap the AngularJS module
    const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, ['demo']);
  });
  // platformBrowserDynamic().bootstrapModule(AppModule);


