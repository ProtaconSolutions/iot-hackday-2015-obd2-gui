(function() {
  'use strict';

  angular
    .module('iot.live')
    .directive('dashboard', dashboard)
  ;

  function dashboard() {
    return {
      restrict: 'E',
      templateUrl: '/iot/live/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        dashboard: '='
      },
      replace: true
    };
  }
})();
