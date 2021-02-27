'use strict';

describe('myApp.login module', function() {

  beforeEach(module('myApp.login'));

  describe('login controller', function(){

    it('should ....', inject(function($componentController) {
      //spec body
      var loginCtrl = $componentController('loginComponent');
      expect(loginCtrl).toBeDefined();
    }));
  });
});
