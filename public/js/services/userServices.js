angular.module('userServices',[])

.factory('User', function($http){
  userFactory = {};
  //User.create(registerdata)
  userFactory.create = function(registerdata){
    return $http.post('/api/users', registerdata);
  }
  return userFactory;
});
