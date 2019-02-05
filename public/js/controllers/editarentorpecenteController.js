angular.module('editarentorpecenteController',['entorpecenteServices','ngTable'])

.controller('editarentorpecenteCtrl', function($http, $location, $timeout, $routeParams, Entorpecente){

    var app = this;

    if($routeParams.entorpecenteId){
      Entorpecente.getEntorpecente($routeParams.entorpecenteId).then(function(data){
        //console.log(data.data);
        app.entorpecentedata = data.data;
        //console.log(app.entorpecentedata);
        return data.data;
      });
    }

    app.editarEntorpecente = function(entorpecentedata, username){
      app.entorpecentedata.username = username;
      Entorpecente.atualizaEntorpecente(app.entorpecentedata)
      .then(function(data){
        console.log(data.status);
        if(data.status == 200){
          //swal aqui
          console.log('Entorpencete atualizado com sucesso');
        }else{
          //swal aqui
          console.log('Houve algum erro na atualização do entorpecente');
        }
      });

  }

});
