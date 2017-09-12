console.log('loaded');


var theMillApp = angular.module('theMillApp', ['ngRoute']);
theMillApp.controller('mainController', function($scope) {
  $scope.message = 'test angular message';
});


// configure our routes
theMillApp.config(function($routeProvider) {
  $routeProvider

            // route for the home page
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
      })

        // route for the about page
        .when('/video1', {
          templateUrl: 'pages/video1.html',
          controller: 'videoOneController'
        })
          // route for the contact page
        .when('/video2', {
          templateUrl: 'pages/video2.html',
          controller: 'videoTwoController'
        })
            // route for the contact page
        .when('/video3', {
          templateUrl: 'pages/video3.html',
          controller: 'videoThreeController'
        })
            // route for the contact page
        .when('/video4', {
          templateUrl: 'pages/video4.html',
          controller: 'videoFourController'
        });


});

    // create the controller and inject Angular's $scope
theMillApp.controller('mainController', function($scope) {
        // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

theMillApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

theMillApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
