(function() {
  'use strict';

  /**
   * Specify controller for iot.dashboard module.
   *
   * @namespace Controllers
   */
  angular
    .module('iot.dashboard')
    .factory('ScaleService', ScaleService)
  ;

  function ScaleService() {
    return {
      rpm: rpm,
      speed: speed,
      fuel: fuel
    };

    //////////

    function rpm() {
      return {
        startAngle: -45,
        endAngle: 120,
        min: 0,
        max: 6,
        majorUnit: 1,
        majorTicks: {
          width: 1,
          size: 7
        },
        minorUnit: 0.2,
        minorTicks: {
          size: 5
        },
        ranges: [{
          from: 4,
          to: 5,
          color: "#ff7a00"
        }, {
          from: 5,
          to: 6,
          color: "#c20000"
        }],
        labels: {
          font: "11px Arial,Helvetica,sans-serif"
        }
      };
    }

    function speed() {
      return {
        startAngle: -60,
        endAngle: 240,

        min: 0,
        max: 220,

        majorTicks: {
          width: 1,
          size: 14
        },
        majorUnit: 20,

        minorTicks: {
          size: 10
        },

        minorUnit: 2
      };
    }

    function fuel() {
      return {
        startAngle: 90,
        endAngle: 180,

        min: 0,
        max: 1,

        majorUnit: 0.5,
        majorTicks: {
          width: 2,
          size: 6
        },

        minorUnit: 0.25,
        minorTicks: {
          size: 3
        },

        ranges: [{
          from: 0,
          to: 0.1,
          color: "#c20000"
        }],

        labels: {
          font: "9px Arial,Helvetica,sans-serif"
        }
      };
    }
  }
})();