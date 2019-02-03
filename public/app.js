angular.module('userApp',['appRoutes','userController','userServices','mainController','autenticarServices','entorpecenteController','entorpecenteServices','editarentorpecenteController','ngTable','ngResource'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AutenticarInterceptores');
});
