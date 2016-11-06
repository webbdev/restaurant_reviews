'use strict';

// Define the 'restaurantList' module
angular.module('restaurantList', []);

// Register 'restaurantList' component, along with its associated controller and template
angular.
  module('restaurantList').
  component('restaurantList', {
    templateUrl: 'templates/restaurant-list.template.html',
    controller: ['$http', function restaurantListController($http) {
      var self = this;

      $http.get('data/restaurants.json').then(function(response) {
        self.restaurants = response.data;
      });

    }]
  });


