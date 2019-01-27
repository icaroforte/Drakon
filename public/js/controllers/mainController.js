angular.module('mainController', ['autenticarServices'])

.controller('mainCtrl', function(Autenticar,$timeout,$location){

    var app = this;

    app.fazerLogin = function(logindata){
      app.loading = true;
      app.falha = false;
      Autenticar.login(app.logindata)
      .then(function(data){
        //console.log(data.data.sucess);
        if(data.data.success){
          app.loading = false;
          //Cria mensagem de sucesso
          app.sucesso = data.data.message + ' Redirecionando para página inicial.';
          //Redireciona para a página incial com timeout
          $timeout(function(){
            $location.path('/#!/about');
          },2000);

        }else{
          app.loading = false;
          //Cria mensagem de erro
          app.falha = data.data.message;
        }
      });
}

});
