//Deveria tá sendo usado no controller
var User = require('../models/user');

//rotas
module.exports = function(router) {

  router.get('/home',function(req,res){
    res.send('Home');
  });

  router.get('/users',function(req,res){
    User.find({}, function(err, data) {
  		if (err) {
  			res.sendStatus(500);
  		} else {
  			res.json(data);
  		}
  	});
  });

  router.post('/users',function(req,res){
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    if(req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "" ||req.body.email == null || req.body.email == "" ){
      res.json({sucess:false, message:'Usuário, email ou senha estão em branco'});
    }else{
      user.save(function(err){
        if(err){
          res.json({sucess:false, message:'Usuário ou email já existem'});
        }else{
          res.json({sucess:true, message:'Usuário criado'});
        }
      });
    }
    //console.log('salvando contato');
  });


  //testando rota simples
  router.get('/', function(req,res){
    res.send('Testando rota');
  });

  //autenticar
  //http://localhost:port/api/autenticar
  router.post('/autenticar', function(req,res){
    User.findOne({username: req.body.username}).select('email username password').exec(function(err,user){
      if(err) throw err;

      if(!user){
        res.json({ success: false, message:'Usuário não autenticado'});
      }else if(user){
        if(req.body.password){
          var validarPassword = user.comparePassword(req.body.password);
        } else{
          res.json({success:false, message:'Senha em branco'});
        }
         if(!validarPassword){
           res.json({success:false, message:'Senha incorreta'});
         }else{
           res.json({success:true, message:'Usuário autenticado'});
         }
      }
    });
  });

  return router;

}
