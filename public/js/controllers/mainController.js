angular.module('mainController', ['autenticarServices'])

.controller('mainCtrl', function(Autenticar, $timeout, $location, $rootScope){

    var app = this;

    //serve para que primeiro se carregue todo a HTML, para depois exibir o angular
    app.loadme = false;
    
    $rootScope.$on('$routeChangeStart',function(){
      if(Autenticar.isLoggedIn()){
        console.log('USUÁRIO LOGADO COM SUCESSO');
        app.isLoggedIn = true;
        Autenticar.getUser().then(function(data){
          app.username = data.data.username;
          app.email = data.data.email;
          app.loadme = true;
        });
      }else{
        console.log('USUÁRIO NÃO LOGADO');
        app.isLoggedIn = false;
        app.username = '';
        app.loadme = true;
      }
    });

    app.fazerLogin = function(logindata){
      app.loading = true;
      app.falha = false;

      Autenticar.login(app.logindata)
      .then(function(data){
        if(data.data.success){
          app.loading = false;
          //Cria mensagem de sucesso
          app.sucesso = data.data.message + ' Redirecionando para página inicial.';
          //Redireciona para a página incial com timeout
          $timeout(function(){
            app.logindata = '';
            app.sucesso = false;
            $location.path('/');
          },2000);

        }else{
          app.loading = false;
          //Cria mensagem de erro
          app.falha = data.data.message;
        }
      });
    };

  this.logout = function(){
    Autenticar.logout();
    $location.path('/logout');
    $timeout(function(){
      $location.path('/login');
    }, 2000);
  };

});
