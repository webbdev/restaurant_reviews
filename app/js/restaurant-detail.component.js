(function() {

'use strict';

// Define the 'restaurantDetail' module
angular.module('restaurantDetail', [
  'ngRoute',
  'ui.bootstrap'
]);

// Register 'restaurantDetail' component, along with its associated controller and template
angular.
  module('restaurantDetail').
  component('restaurantDetail', {
    templateUrl: 'templates/restaurant-detail.template.html',
    controller: ['$http', '$routeParams',
      function restaurantDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('data/' + $routeParams.restaurantId + '.json').then(function(response) {
          self.restaurant = response.data;
          self.setImage(self.restaurant.images[0]);
         
          self.review = {};
        });

          // Add a Review to the list
          self.liveReviews = [];
          
          self.addReview = function() {
            self.liveReviews.push({
                author:self.liveReviewAuthor,
                rating_value:self.liveReviewRating_value,
                stars:self.liveReviewStars,
                comment:self.liveReviewComment,
            });
            // Clear input fields after push
            self.liveReviewAuthor = "";
            self.liveReviewRating_value = "";
            self.liveReviewStars = "";
            self.liveReviewComment = "";
          }; 

          // Add a date to review
          self.today = new Date();

          // add filter
          self.property = 'stars';
          self.reverse = true;

          self.sortBy = function(propertyName) {
            self.reverse = (self.propertyName === propertyName) ? !self.reverse : false;
            self.propertyName = propertyName;
          };


          // rating
          self.rate = 3;
          self.max = 5;
          self.isReadonly = false;

          self.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
          ];

      }
    ]
  });

})();