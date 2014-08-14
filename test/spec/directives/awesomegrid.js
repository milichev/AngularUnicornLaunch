'use strict';

describe('Directive: AwesomeGrid', function () {

  // load the directive's module
  beforeEach(module('angularUnicornLaunchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-awesome-grid></-awesome-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the AwesomeGrid directive');
  }));
});
