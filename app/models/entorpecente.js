var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntorpecenteSchema = new Schema({
  username:{
  		type: String,
  		require: true
  	},
  	procedimento:{
  		type: String,
  	},
  	n_proced:{
  		type: String,
  	},
  	data_entrada:{
  		type: String,
  	},
  	investigado:{
  		type: String,
  	},
  	substancia:{
  		type: String,
  	},
  	quant:{
  		type: Number,
  	},
  	und:{
  		type: String,
  	},
  	laudo:{
  		type: String,
  	},
  	vara:{
  		type: String,
  	},
  	n_processo:{
  		type: String,
  	},
  	lacre:{
  		type: String,
  	},
  	data_autorizacao:{
  		type: String,
  	},
  	caixa:{
  		type: String,
  	},
  	oficio:{
  		type: String,
  	},
  	delegacia:{
  		type: String,
  	},
    autorizacao:{
      type: String,
    },
    data_apreensao:{
      type: String,
    },
    local_apreensao:{
      type: String,
    },
    incinerado:{
      type: String,
    }
});

module.exports = mongoose.model('Entorpecente', EntorpecenteSchema);
