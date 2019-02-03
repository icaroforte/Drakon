angular.module('entorpecenteController',['entorpecenteServices','ngTable'])

.controller('entorpecenteCtrl', function($http, $location, $timeout, $routeParams, Entorpecente, NgTableParams){

    var app = this;

    //Esta diretiva auxilia o ng-click da tabela, para tornar toda a linha um link.
    app.linkedTable = function(user){
      $location.path('/editarentorpecente/' + user._id);
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

  app.entorpecentes = [];

  var data = [];

  let buscaEntorpecentes = () =>{

    Entorpecente.getEntorpecentes()
    .then(function(data){
      app.entorpecentes = data.data;
      data = data.data;

      app.tableParams = new NgTableParams({}, { dataset: data});
    });

  }

buscaEntorpecentes();


});
