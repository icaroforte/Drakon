angular.module('userApp',['appRoutes','userController','userServices','mainController','autenticarServices','entorpecenteController','entorpecenteServices','ngTable'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AutenticarInterceptores');
});
