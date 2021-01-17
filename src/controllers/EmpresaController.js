const Empresa = require('../models/Empresa');
require('dotenv').config();

module.exports = {
  async getEmpresas (req, res) {
    try {

      const empresas = await Empresa.find({})

      return res.status(200).json({empresas})
    } catch (error) {
      return res.status(400).json({ error: "Falha ao buscar empresas" })
    }
  },

  async getEmpresa (req, res) {
    try {
      const empresa = await Empresa.findById(req.params.idEmpresa)
      return res.status(200).json({empresa})
    } catch (error) {
      return res.status(400).json({ error: "Empresa não encontrado" })
    }
  },
  async registerEmpresa (req, res) {
    const { razao_social } = req.body
    const id_user = req.id_user
 
    try {
      if(await Empresa.findOne({razao_social})){
        return res.status(400).json({error: 'Empresa já existe'});
      }

      const empresa = await Empresa.create({...req.body, id_user});

      return res.status(200).json({empresa})
    } catch (error) {
      return res.status(400).json({ error: "Falha ao criar Empresa" })
    }
  },
}