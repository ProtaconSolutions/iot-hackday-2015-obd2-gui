(function() {
  'use strict';

  /**
   * Specify controller for iot.live module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.live')
    .controller('LiveController', LiveController)
  ;

  /**
   * @desc      Controller implementation for /live route.
   * @namespace Live
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function LiveController(
    $scope, $firebaseObject,
    _,
    dataservice,
    _codesActive, _codes, _command, _errors
  ) {
    var vm = this;

    vm.codes = _codes;
    vm.codesActive = _codesActive;
    vm.command = _command;
    vm.errors = _errors;

    vm.commands = [];

    $scope.$watch('vm.codes', function(codes) {
      if (!codes) {
        return;
      }

      vm.commands = [];

      _.forEach(codes, function(code) {
        var model = _.find(vm.codesActive, {PID: code.$value}) || false;

        vm.commands.push(
          {
            name: code.$value,
            active: model ? true : false
          }
        );
      });
    }, true);

    $scope.$watch('vm.commands', function(valueNew, valueOld) {
      if (valueNew && valueNew !== valueOld) {
        _.forEach(valueNew, function(command) {
          var oldCommand = _.find(valueOld, {name: command.name});

          if (command.active && oldCommand && command.active !== oldCommand.active) {
            vm.codesActive.$add({PID: command.name}).then(toggleCommandState);
          } else if (!command.active) {
            var activeCode = _.find(vm.codesActive, {PID: command.name});

            if (activeCode) {
              var activeCommand = $firebaseObject(dataservice.getReference('LIVE_PID_CODES/' + activeCode.$id));

              activeCommand.$loaded().then(function(record) {
                record.$remove().then(toggleCommandState);
              });
            }
          }
        });
      }
    }, true);

    function toggleCommandState(command) {
      vm.command.$value = '';

      vm.command.$save().then(function() {
        vm.command.$value = 'LIVE_DATA';

        vm.command.$save().then(function() {
          console.log('command toggled successfully');
        });
      });
    }
  }
})();
