angular.module('autenticarServices',[])

  .factory('Autenticar', function($http){
    autenticarFactory = {};
    //User.create(registerdata)
    autenticarFactory.login = function(logindata){
      return $http.post('/api/autenticar', logindata);
    }
    return autenticarFactory;
});
