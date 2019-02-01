var app = angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider){

  $routeProvider

  .when('/',{
    templateUrl:'partials/home.html',
    controller:'entorpecenteCtrl',
    controllerAs:'entorpecente',
    autenticado: true
  })

  .when('/about',{
    templateUrl:'partials/about.html',
    controller:'entorpecenteCtrl',
    controllerAs:'entorpecente'
  })

  .when('/register',{
    templateUrl:'partials/register.html',
    controller:'registerController',
    controllerAs: 'register',
    autenticado: false
  })

  .when('/login',{
    templateUrl:'partials/login.html',
    autenticado: false
  })

  .when('/logout',{
    templateUrl:'partials/logout.html',
    autenticado: true
  })

  .when('/profile',{
    templateUrl:'partials/profile.html',
    autenticado: true
  })

  .when('/cadastroentorpecente',{
    templateUrl:'partials/cadastroentorpecente.html',
    controller:'entorpecenteCtrl',
    controllerAs:'entorpecente',
    autenticado: true
  })

  .otherwise({redirectTo: '/'});
});


//função para impedir acesso a determinadas rotas quando o usuário estiver autenticado ou não autenticado
app.run(['$rootScope', 'Autenticar','$location',function($rootScope, Autenticar, $location){

  $rootScope.$on('$routeChangeStart', function(event, next, current){

    if(next.$$route.autenticado == true){
      if (!Autenticar.isLoggedIn()){
        event.preventDefault();
        $location.path('/');
      }
    }else if (next.$$route.autenticado == false){
      if (Autenticar.isLoggedIn()){
        event.preventDefault();
        $location.path('/profile');
      }
    }

  });
}]);
