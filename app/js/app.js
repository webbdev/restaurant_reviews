'use strict';

// Define the 'restaurantApp' module
var app = angular.module('restaurantApp', [
  'ngAnimate',
  'ngRoute',
  'ui.bootstrap',
  'restaurantDetail',
  'restaurantList'
])

  .config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/restaurants', {
          template: '<restaurant-list></restaurant-list>'
        }).
        when('/restaurants/:restaurantId', {
          template: '<restaurant-detail></restaurant-detail>'
        }).
        otherwise('/restaurants');
    }
  ]);

