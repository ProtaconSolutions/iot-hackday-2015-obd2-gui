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
                _speed: _speed,
                _rpm: _rpm
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @name      _speed
   * @desc      '_speed' resolve function.
   * @memberOf  Routes.Dashboard
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _speed($firebaseArray, dataservice) {
    return [];
  }

  /**
   * @name      _rpm
   * @desc      '_rpm' resolve function.
   * @memberOf  Routes.Dashboard
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _rpm($firebaseArray, dataservice) {
    return [];
  }
})();
