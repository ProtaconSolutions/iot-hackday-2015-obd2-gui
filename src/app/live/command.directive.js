(function() {
  'use strict';

  angular
    .module('iot.live')
    .directive('command', command)
  ;

  function command() {
    return {
      restrict: 'E',
      templateUrl: '/iot/live/command.html',
      controller: 'CommandController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        command: '='
      },
      replace: true
    };
  }
})();
