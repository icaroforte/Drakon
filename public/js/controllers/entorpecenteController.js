angular.module('entorpecenteController',['entorpecenteServices','ngTable'])

.controller('entorpecenteCtrl', function($http, $location, $timeout, $routeParams, Entorpecente, NgTableParams){

    var app = this;

    //Esta diretiva auxilia o ng-click da tabela, para tornar toda a linha um link.
    app.linkedTable = function(user){
      $location.path('/editarentorpecente/' + user._id);
    }

    //Registra o entorpecente
    app.registerEntorpecente = function(entorpecentedata){
      //Necessita pelo menos usuário e a delegacia para registrar Entorpecente
      if(app.entorpecentedata.username != null && app.entorpecentedata.username != '' && app.entorpecentedata.delegacia != null && app.entorpecentedata.delegacia != ''){

        Entorpecente.create(app.entorpecentedata);

        //Alerta de sucesso no cadastro
        swal({
           title: "Cadastrado!",
           text: "O registro foi realizado com sucesso!",
           icon: "success"
        });

        //Irá limpar o formulário após registrar o entorpecente
        app.entorpecentedata = null;

      }else{

        //Alerta de falha no cadastro
        swal({
           title: "Não cadastrado!",
           text: "Algo de errado aconteceu e o entorpecente não foi registrado",
           icon: "error"
        });
      }
  }

  app.entorpecentes = [];


  var data = [];

  let buscaEntorpecentes = () =>{

    Entorpecente.getEntorpecentes()
    .then(function(data){
      app.entorpecentes = data.data;
      app.entorpecentes.reverse();
      data = data.data;

      app.tableParams = new NgTableParams({}, { dataset: data});
    });

  }

buscaEntorpecentes();


});
