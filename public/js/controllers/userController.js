angular.module('userController',['userServices'])

.controller('registerController', function($http,$location,$timeout, User){

    var app = this;

    app.registerUser = function(registerdata){
      app.loading = true;
      app.falha = false;

      User.create(app.registerdata)
      .then(function(data){
        //console.log(data.data.sucess);
        if(data.data.success){
          app.loading = false;
          //Cria mensagem de sucesso
          app.sucesso = data.data.message + ' Redirecionando para página inicial.';
          //Redireciona para a página incial com timeout
          $timeout(function(){
            $location.path('/#!');
          },2000);

        }else{
          app.loading = false;
          //Cria mensagem de erro
          app.falha = data.data.message;
        }
      });
  }
});
