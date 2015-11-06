(function() {
  'use strict';

  /**
   * Specify controller for iot.live module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.live')
    .controller('ErrorCodeController', ErrorCodeController)
  ;

  /**
   * @ngInject
   *
   * @constructor
   */
  function ErrorCodeController(moment) {
    var vm = this;

    vm.getDate = function getDate() {
      return moment.unix(parseInt(vm.error.time, 10)).format('DD.MM.YYYY HH:mm:ss');
    }
  }
})();
