(function() {
  'use strict';

  angular
    .module('iot.live')
    .directive('errorCode', errorCode)
  ;

  function errorCode() {
    return {
      restrict: 'E',
      templateUrl: '/iot/live/error.code.html',
      controller: 'ErrorCodeController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '='
      },
      replace: true
    };
  }
})();
