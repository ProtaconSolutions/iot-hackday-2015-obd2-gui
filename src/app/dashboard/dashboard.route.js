(function() {
  'use strict';

  /**
   * Specify run block for iot.dashboard module.
   *
   * @namespace Routes
   */
  angular
    .module('iot.dashboard')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for iot.dashboard module.
   * @namespace Dashboard
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
   * @desc      Getter method for iot.dashboard module route definitions.
   * @memberOf  Routes.Dashboard
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          parent: 'iot',
          title: 'obd2 - dashboard',
          containerClass: 'dashboard-container',
          views: {
            'content@': {
              templateUrl: '/iot/dashboard/dashboard.html',
              controller: 'DashboardController',
              controllerAs: 'vm',
              resolve: {
                _dashboard: _dashboard,
                _errorCodes: _errorCodes,
                _liveData: _liveData
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @name      _dashboard
   * @desc      '_speed' resolve function.
   * @memberOf  Routes.Dashboard
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _dashboard($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('DASHBOARD'));
  }

  /**
   * @name      _liveData
   * @desc      '_rpm' resolve function.
   * @memberOf  Routes.Dashboard
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _liveData($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('SUPPORTED_COMMANDS'));
  }

  /**
   * @name      _liveData
   * @desc      '_rpm' resolve function.
   * @memberOf  Routes.Dashboard
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _errorCodes($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('ERROR_CODES'));
  }
})();
