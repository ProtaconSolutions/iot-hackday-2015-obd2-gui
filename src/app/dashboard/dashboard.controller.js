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
    .controller('CommandController', CommandController)
  ;

  /**
   * @desc      Controller implementation for /dashboard route.
   * @namespace Dashboard
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function DashboardController(
    $scope,
    _,
    ScaleService,
    _dashboard, _errorCodes, _liveData
  ) {
    var vm = this;

    vm.dashboard = _dashboard;
    vm.liveData = _liveData;
    vm.errorCodes = _errorCodes;

    vm.commands = [];

    $scope.$watch('vm.liveData', function(values) {
      _.forEach(values, function(value) {
        vm.commands.push(value.$value);
      })
    }, true);


    vm.scaleRpm = ScaleService.rpm();
    vm.scaleSpeed = ScaleService.speed();
    vm.scaleFuel = ScaleService.fuel();

    $scope.$watch('vm.dashboard', function(values, old) {
      if (values && values !== old) {
        vm.rpm = _.find(values, {$id: 'RPM'}).$value / 1000;
        vm.speed = _.find(values, {$id: 'SPEED'}).$value;
        vm.fuel = _.find(values, {$id: 'COOLANT_TEMP'}).$value;

        /*

        vm.temp = _.find(values, {$id: 'temp'}).$value;

        */


      }
    }, true)
  }

  /**
   *
   * @ngInject
   *
   * @param $firebaseArray
   * @param dataservice
   * @constructor
   */
  function CommandController($filter, $firebaseArray, dataservice, moment) {
    var vm = this;
    var list = $firebaseArray(dataservice.getReference('LIVE_DATA/' + vm.name));

    list.$loaded().then(function(data) {

        vm.values = data;

    });

    vm.getDate = function getDate(time) {
      return moment.unix(parseInt(time, 10)).format('DD.MM.YYYY HH:mm:ss');
    };

    vm.getValue = function getValue(value, unit) {
      var output;

      switch (unit) {
        case '%':
        case 'Volt':
        case 'Degrees':
        case 'Grams per Second':
          output = $filter('number')(value, 2);
          break;
        case 'C':
        case 'RPM':
        case 'kph':
          output = $filter('number')(value, 0);
          break;
        case 'Second':
          output = 'laske aika';
          break;
        default:
          output = value;
          break;
      }

      return output;
    };
  }

  angular
    .module('iot.dashboard')
    .directive('command', command)
  ;

  function command() {
    return {
      restrict: 'E',
      templateUrl: '/iot/dashboard/command.html',
      controller: 'CommandController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        name: '='
      },
      replace: true
    };
  }
})();
