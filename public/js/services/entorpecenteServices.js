angular.module('entorpecenteServices',[])

.factory('Entorpecente', function($http){
  entorpecenteFactory = {};
  entorpecenteFactory.create = function(entorpecentedata){
    return $http.post('/api/entorpecente', entorpecentedata);
  }

  entorpecenteFactory.getEntorpecentes = function(){
    console.log('entorpecentes lista');
    return $http.get('/api/entorpecentes');
  };


  return entorpecenteFactory;
});
