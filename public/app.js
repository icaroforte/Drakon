angular.module('userApp',['appRoutes','userController','userServices','mainController','autenticarServices','entorpecenteController','entorpecenteServices'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AutenticarInterceptores');
});
