'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($componentController) {
      //spec body
      var view1Ctrl = $componentController('view1Component');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
