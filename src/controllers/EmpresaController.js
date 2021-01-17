const Empresa = require('../models/Empresa');
require('dotenv').config();

module.exports = {
  async getEmpresas(req, res) {
    try {

      const empresas = await Empresa.find({})

      return res.status(200).json({ empresas })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao buscar empresas" })
    }
  },

  async getEmpresa(req, res) {
    try {
      const empresa = await Empresa.findById(req.params.idEmpresa)
      if(!empresa){
        return res.status(404).json({ error: "Empresa não encontrado" })
      }
      return res.status(200).json({ empresa })
    } catch (error) {
      return res.status(400).json({ error: "Empresa não encontrado" })
    }
  },
  async registerEmpresa(req, res) {
    const { razao_social } = req.body
    const id_user = req.id_user

    try {
      if (await Empresa.findOne({ razao_social })) {
        return res.status(400).json({ error: 'Empresa já existe' });
      }

      const empresa = await Empresa.create({ ...req.body, id_user });

      return res.status(200).json({ empresa })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao criar Empresa" })
    }
  },
  async updateEmpresa(req, res) {
    const { idEmpresa } = req.params

    try {
      if (!await Empresa.findById(idEmpresa)) {
        return res.status(404).json({ error: 'Empresa não existe' });
      }

      const empresa = await Empresa.updateOne({_id: idEmpresa},{ ...req.body });

      return res.status(200).json({ empresa })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: "Falha ao atualizar Empresa" })
    }
  },
  async deleteEmpresa(req, res) {
    const { idEmpresa } = req.params

    try {
      if (!await Empresa.findById(idEmpresa)) {
        return res.status(404).json({ error: 'Empresa não existe' });
      }

      await Empresa.deleteOne({_id: idEmpresa});

      return res.status(200).json({mensagem: "Empresa apagada com sucesso"})
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: "Falha ao atualizar Empresa" })
    }
  },
}