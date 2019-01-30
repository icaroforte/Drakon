angular.module('userApp',['appRoutes','userController','userServices','mainController','autenticarServices'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AutenticarInterceptores');
});
