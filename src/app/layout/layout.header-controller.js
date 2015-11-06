(function() {
  'use strict';

  /**
   * Specify controller for iot.layout module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.layout')
    .controller('HeaderController', HeaderController)
  ;

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function HeaderController(_command) {
    var vm = this;

    vm.currentState = _command;
  }
})();
