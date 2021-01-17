const mongoose = require("../database");

const EmpresaSchema = new mongoose.Schema({
  id_user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  abrangencia_regional: {
    type: String,
  },
  c_leveis: {
    type: String,
  },
  canais_digitais: {
    type: Boolean,
  },
  cdc: {
    type: String
  },
  porte: {
    type: String
  },
  razao_social: {
    type: String,
    required: true
  },
  segmento_negocio: {
    type: String,
    required: true
  },
  setor: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});


const Empresa = mongoose.model('Empresa', EmpresaSchema);

module.exports = Empresa;