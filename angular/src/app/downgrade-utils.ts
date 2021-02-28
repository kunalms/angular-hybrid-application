import { downgradeComponent } from '@angular/upgrade/static';
import { LoginComponent } from './login/login.component';

// @ts-ignore
declare var angular: angular.IAngularStatic;

export function downgradeItems(): void {

  angular.module('myApp.login')
    .directive('dgdLoginComponent', downgradeComponent({component: LoginComponent}))
}
