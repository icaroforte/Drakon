var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
    Modelo de classe entorpecente para o sistema.
    
    # API
    
    ```

    @class Entorpecentes.
    @param userName?: string - O userName de quem cadastrou o Entorpecente.
	@param procedimento?: string - O tipo de procedimento.
	@param n_proced?: string - O código de procedimento.
	@param data_entrada: Date - Data de entrada do procedimento.
	@param investiado?: string - O nome do suspeito de portar a substância apreendida.
	@param substancia?: string - Qual a substância foi apreendida.
	@param quant?: string - A quantidade que foi apreendida.
	@param und?: string - O sistema de unidade de medida utilizado.
	@param laudo?: string - O código do laudo do entorpecente.
	@param vara?: string - A vara que foi enviado o laudo.
	@param n_processo?: string - O código do processo.
	@param lacre?: string - O código do lacre.
	@param data_autorizacao?: Date - Data de autorização.
	@param caixa?: string - A caixa onde a droga está armazenada.
	@param oficio?: string - O ofício emitido para o entorpecente.
	@param delegacia?: string - De qual delegacia veio o entorpecente.
	@param autorizacao?: string - Autorizacao para incineracao.
	@param data_apreensao?: string - Data da apreensao do entorpecente.
	@param local_apreensao?: string - Local de apreensao da droga.
	@param incinerado?: string - Se o entorpecente ja foi incinerado.

	```

*/


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
