angular.module('autenticarServices',[])

  .factory('Autenticar', function($http, AutenticarToken){
    autenticarFactory = {};
    //User.create(registerdata)
    autenticarFactory.login = function(logindata){
      return $http.post('/api/autenticar', logindata).then(function(logindata){
        AutenticarToken.setToken(logindata.data.token);
        return logindata;
      });
    }

    //função informando se o usuário está logado
    //Autenticar.isLoggedIn
    autenticarFactory.isLoggedIn = function(){
      if(AutenticarToken.getToken()){
        return true;
      }else{
        return false;
      }
    };

    //função para resgatar as informações do usuário após token ser decrypted
    //Autenticar.getUser();
    autenticarFactory.getUser = function(){
      if(AutenticarToken.getToken()){
        return $http.post('/api/me');
      }else{
        $q.reject({message: 'Usuário não tem token'});
      }
    };

    //Autenticar.logout();
    autenticarFactory.logout = function(){
      AutenticarToken.setToken();
    };

    return autenticarFactory;
})

  .factory('AutenticarToken', function($window){
    var autenticarTokenFactory = {};

    //AutenticarToken.setToken(token);
    autenticarTokenFactory.setToken = function(token){
      if(token){
        $window.localStorage.setItem('token',token);
      }else{
        $window.localStorage.removeItem('token',token);
      }

    }

    //AutenticarToken.getToken();
    autenticarTokenFactory.getToken = function(){
      return $window.localStorage.getItem('token');
    }

    return autenticarTokenFactory;
  })

  //factory para possibilitar informações do usuário para o frontend
  .factory('AutenticarInterceptores', function(AutenticarToken){
    var autenticarInterceptoresFactory = {};

    autenticarInterceptoresFactory.request = function(config){

      var token = AutenticarToken.getToken();

      if(token) config.headers['x-acess-token'] = token;

      return config;
    };

    return autenticarInterceptoresFactory;

  });
