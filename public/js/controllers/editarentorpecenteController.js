angular.module('editarentorpecenteController',['entorpecenteServices','ngTable'])

.controller('editarentorpecenteCtrl', function($http, $location, $timeout, $routeParams, Entorpecente){

    var app = this;

    //console.log($routeParams.entorpecenteId);
    //Entorpecente.getEntorpecente($routeParams.entorpecenteId);
    //console.log(Entorpecente.getEntorpecente($routeParams.entorpecenteId));

    //console.log($location.url() == '/editarentorpecente/'+$routeParams.entorpecenteId );

    if($routeParams.entorpecenteId){
      Entorpecente.getEntorpecente($routeParams.entorpecenteId).then(function(data){
        //console.log(data.data);
        app.entorpecentedata = data.data;
        //console.log(app.entorpecentedata);
      });
    }

    app.editarEntorpecente = function(entorpecentedata){
      console.log(app.entorpecentedata);
      Entorpecente.atualizaEntorpecente(app.entorpecentedata)
      .then(function(data){
        console.log(data.status);
        if(data.status == 200){
          console.log('Entorpencete atualizado com sucesso');
        }else{
          console.log('Houve algum erro na atualização do entorpecente');
        }
      });

  }


    app.registerEntorpecente = function(entorpecentedata){

      Entorpecente.create(app.entorpecentedata)
      .then(function(data){
        //console.log(data.data.sucess);
        if(data.data.success){
          //Cria mensagem de sucesso
          app.sucesso = data.data.message + ' Entorpecente criado com sucesso.';
          //Redireciona para a página incial com timeout
          $timeout(function(){
            $location.path('/#!');
          },2000);
        }else{
          //Cria mensagem de erro
          app.falha = data.data.message + ' Entorpecente não pôde ser criado.';
        }
      });
  }


});
