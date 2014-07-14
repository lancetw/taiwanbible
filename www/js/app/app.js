define(['angular', 'controllers/controllers',
  'services/services', 'filters/filters',
  'directives/directives'], function (angular) {
  return angular.module('myApp', ['myApp.controllers', 'myApp.services', 'myApp.filters', 'myApp.directives', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
      }
    ]);
});
