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

      if(app.entorpecentedata.username != null && app.entorpecentedata.username != '' && app.entorpecentedata.delegacia != null && app.entorpecentedata.delegacia != ''){

        Entorpecente.atualizaEntorpecente(app.entorpecentedata)
        .then(function(data){
          console.log(data.status == 200);
          console.log('Entorpencete atualizado com sucesso');
          swal({
             title: "Editado!",
             text: "O registro foi atualizado com sucesso!",
             icon: "success",
             timer: 3000,
             buttons: false
          });
        });

        //Redireciona para a página incial com timeout
        $timeout(function(){
          $location.path('/#!');
        },3000);

      }else{

        swal({
           title: "Não foi possível editar!",
           text: "Verifique se os campos estão preenchidos corretamente.",
           icon: "error"
        });
      }
    }

    app.deleteEntorpecente = function(){


      swal({
        title: "Deseja realmente deletar este entorpencete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

          Entorpecente.deleteEntorpecente($routeParams.entorpecenteId).then(function(data){

            if(data.data.deletedCount == 1){
              console.log('Entorpecente deletado com sucesso');
              swal({
                 title: "Deletado!",
                 text: "O entorpecente foi apagado!",
                 icon: "success",
                 timer: 3000,
                 buttons: false
              });
              //Redireciona para a página incial com timeout
              $timeout(function(){
                $location.path('/#!');
              },3000);

            }else{
              swal({
                 title: "Não foi possível deletar!",
                 text: "Algo de errado aconteceu e não o entorpecente não pode ser deletado.",
                 icon: "error"
              });
            }
            //console.log(data);

          });

        } else {
          //nothing
        }
      });
    }

  });
