angular.module('entorpecenteServices',[])

.factory('Entorpecente', function($http){
  entorpecenteFactory = {};
  entorpecenteFactory.create = function(entorpecentedata){
    return $http.post('/api/entorpecente', entorpecentedata);
  }

  entorpecenteFactory.getEntorpecentes = function(){
    return $http.get('/api/entorpecentes');
  };


  return entorpecenteFactory;
});
