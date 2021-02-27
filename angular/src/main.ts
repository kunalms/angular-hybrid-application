import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';
import { environment } from './environments/environment';
import { downgradeItems } from './app/downgrade-utils';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    // once the angular 2 application is bootstrapped successfully we will try to bootstrap angularJS application.

    // before bootstrapping down grade the items if they are needed by the angularJS components.
    downgradeItems();

    // initialize the upgrade module
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // bootstrap the AngularJS app.
    upgrade.bootstrap(document.documentElement, ['myApp']);
    console.log('AngularJS application Bootstrapped successfully.');
  })
  .catch(err => console.error(err));
