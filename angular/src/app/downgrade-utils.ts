import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { LoginComponent } from './login/login.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { AlertService } from './core/services/alert.service';

// @ts-ignore
declare var angular: angular.IAngularStatic;

export function downgradeItems(): void {

  angular.module('myApp.login')
    // download login component
    .directive('dgdLoginComponent', downgradeComponent({component: LoginComponent}))

    // downgrade datePicker component
    .directive('dgdDatePicker', downgradeComponent({component: DatePickerComponent}));

  // downgrade alert service
  angular.module('myApp.register')
    .factory('dgdAlertService', downgradeInjectable(AlertService))
}
