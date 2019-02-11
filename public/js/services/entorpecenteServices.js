angular.module('entorpecenteServices',[])

.factory('Entorpecente', function($http){
  entorpecenteFactory = {};
  entorpecenteFactory.create = function(entorpecentedata){
    return $http.post('/api/entorpecente', entorpecentedata);
  }

  entorpecenteFactory.getEntorpecentes = function(){
    return $http.get('/api/entorpecentes');
  };

  entorpecenteFactory.getEntorpecente = function(entorpecenteId){
    //var id = $http.get('/api/entorpecente/'+entorpecenteId);
    //console.log(id);
    return $http.get('/api/entorpecente/'+entorpecenteId);
  }

  entorpecenteFactory.atualizaEntorpecente = function(entorpecentedata){

    console.log(entorpecentedata);

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return $http.put('/api/entorpecente/'+entorpecentedata._id,entorpecentedata,{headers:headers});

  }

  return entorpecenteFactory;

});
