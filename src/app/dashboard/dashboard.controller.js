(function() {
  'use strict';

  /**
   * Specify controller for iot.dashboard module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.dashboard')
    .controller('DashboardController', DashboardController)
  ;

  /**
   * @desc      Controller implementation for /dashboard route.
   * @namespace Dashboard
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {[]}  _speed
   * @param {[]}  _rpm
   *
   * @constructor
   */
  function DashboardController(_speed, _rpm) {
    var vm = this;

    vm.speed = _speed;
    vm.rpm = _rpm;
  }
})();
