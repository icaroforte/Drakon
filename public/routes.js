angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider){

  $routeProvider

  .when('/',{
    templateUrl:'partials/home.html'
  })

  .when('/about',{
    templateUrl:'partials/about.html'
  })

  .when('/register',{
    templateUrl:'partials/register.html',
    controller:'registerController',
    controllerAs: 'register'
  })

  .when('/login',{
    templateUrl:'partials/login.html'    
  })

  .otherwise({redirectTo: '/'});
});
