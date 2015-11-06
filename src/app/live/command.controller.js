(function() {
  'use strict';

  /**
   * Specify controller for iot.live module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.live')
    .controller('CommandController', CommandController)
  ;

  /**
   * @ngInject
   *
   * @constructor
   */
  function CommandController($filter, $firebaseArray, dataservice, moment) {
    var vm = this;
    var list = $firebaseArray(dataservice.getReference('LIVE_DATA/' + vm.command.name));

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
})();
