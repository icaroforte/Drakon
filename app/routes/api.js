//Deveria tá sendo usado no controller
var User = require('../models/user');
var Entorpecente = require('../models/entorpecente');
var jwt = require('jsonwebtoken');
//Secret a titulo de teste da aplicação
var secret = 'algaroba';

//ROTAS
//################################## API Usuários ####################################\\
module.exports = function(router) {

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
           var token = jwt.sign({username: user.username, email: user.email}, secret,{expiresIn:'24h'});
           res.json({success:true, message:'Usuário autenticado', token: token});
         }
      }
    });
  });


//################################## API Entorpecentes ####################################\\

//busca lista de Entorpecentes
//http://localhost:port/api/entorpecentes
router.get('/entorpecentes', function(req, res) {
  Entorpecente.find({}, function(err, data) {
    console.log('aqui lista');
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

//busca Entorpecente por ID
//http://localhost:port/api/entorpecente/:id
    router.get('/entorpecente/:id', function(req, res) {
    var query = { _id: req.params.id };
    console.log(query);
    Entorpecente.findOne(query, function(err, data) {
      if (err || data == null) {
        res.sendStatus(404);
      } else {
        res.json(data);
      }
    });
  });

//cadastro de Entorpecente
//http://localhost:port/api/entorpecente
  router.post('/entorpecente',function(req,res){
    var entorpecente = new Entorpecente(req.body);

    	entorpecente.save(function(err, data) {

    		console.log(data);

    		if (err) {
    			res.status(400).json(err);
    		} else {
    			res.status(201).json(data);
    		}
    	});
  });

//editando entorpecente
//http://localhost:port/api/entorpecente/:id
  router.put('/entorpecente/:id', function(req, res) {
  	var query = { _id: req.params.id };
  	var mod = req.body;
  	delete mod._id;

  	Entorpecente.update(query, mod, function(err, data) {
  		if (err) {
  			res.status(400).json(err);
  		} else {
  			res.json(data);
  		}
  	});
  });

//deletando entorpecente
//http://localhost:port/api/entorpecente/:id
  router.delete('/entorpecente/:id', function(req, res) {
	var query = { _id: req.params.id };

	Entorpecente.deleteOne(query, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});


//################################## API Token ####################################\\
  router.use(function(req, res, next){

    var token = req.body.token || req.body.query || req.headers['x-acess-token'];

    if(token){
      //verifica token
      jwt.verify(token, secret, function(err, decoded){
        if(err){
          res.json({success:false, message:'Token inválido'});
        }else{
          req.decoded = decoded;
          next();
        }
      });
    }else{
      res.json({success:false, message:'Nenhum token passado como parâmetro'});
    }
  });

  router.post('/me', function(req,res){
    res.send(req.decoded);
  });

  return router;

}
