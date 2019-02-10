angular.module('userController',['userServices'])

.controller('registerController', function($http,$location,$timeout, User){

    var app = this;

    app.registerUser = function(registerdata){
      console.log(registerdata);

      User.create(app.registerdata)
      .then(function(data){
        console.log(data);
        if(data.data.sucess){
          swal({
             title: "Usuário cadastrado!",
             text: "Ocorreu tudo bem ao cadastrar o novo usuário.",
             type: "success",
             timer: 3000,
             icon: "success"
          });
          $timeout(function(){
            $location.path('/#!');
          },3000);
        }else{
          swal({
             title: "Atenção, usuário não cadastrado!",
             text: data.data.message,
             type: "error",
             icon: "error"
          });
        }
      });
  }
});
