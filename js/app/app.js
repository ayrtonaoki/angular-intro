angular.module('myModule', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'indexController'
      })
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })

    $routeProvider.otherwise({ redirectTo: "/home" });
  })