(function() {
  'use strict';

  /**
   * Specify run block for iot.live module.
   *
   * @namespace Routes
   */
  angular
    .module('iot.live')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for iot.live module.
   * @namespace Live
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   */
  function moduleRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  /**
   * @name      getStates
   * @desc      Getter method for iot.live module route definitions.
   * @memberOf  Routes.Live
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'live',
        config: {
          url: '/',
          parent: 'iot',
          title: 'obd2 - live',
          containerClass: 'live-container',
          views: {
            'content@': {
              templateUrl: '/iot/live/live.html',
              controller: 'LiveController',
              controllerAs: 'vm',
              resolve: {
                _codesActive: _codesActive,
                _codes: _codes,
                _command: _command
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @name      _codes
   * @desc      '_codes' resolve function.
   * @memberOf  Routes.Live
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _codes($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('SUPPORTED_COMMANDS'));
  }

  /**
   * @name      _codesActive
   * @desc      '_codesActive' resolve function.
   * @memberOf  Routes.Live
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _codesActive($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('LIVE_PID_CODES'));
  }

  /**
   * @name      _command
   * @desc      '_command' resolve function.
   * @memberOf  Routes.Live
   * @ngInject
   *
   * @param   {AngularFireObjectService} $firebaseObject
   * @param   {Factories.Dataservice}    dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _command($firebaseObject, dataservice) {
    return $firebaseObject(dataservice.getReference('ACTIVE_COMMAND'));
  }

})();
