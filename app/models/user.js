var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

/*
 Modelo de objeto usuario para o sistema
 
 #API

 
 @class User.
 @param username?: String - O userName do usuario a ser cadastrado. Deve ser unico. Sera utilizado quando o usuario fizer login
 @param password?: String - Senha do usuario a ser cadastrado.
 @param email?: String - O email do usuario a ser cadastrado. Deve ser unico.


*/

var UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true
  }
});

/*

@method

API

metodo para gravacao do usuario

*/

UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, null, null, function(err,hash){
    if(err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};



module.exports = mongoose.model('User', UserSchema);
