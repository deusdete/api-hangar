const Post = require('../models/Post');
require('dotenv').config();

module.exports = {
  async getPosts(req, res) {
    try {

      const posts = await Post.find({})

      return res.status(200).json({ posts })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao buscar posts" })
    }
  },

  async getPost(req, res) {
    try {
      const post = await Post.findById(req.params.idEmpresa)
      if(!post){
        return res.status(404).json({ error: "Post não encontrado" })
      }
      return res.status(200).json({ post })
    } catch (error) {
      return res.status(400).json({ error: "Post não encontrado" })
    }
  },
  async cratePost(req, res) {
    const { title, text } = req.body
    const id_user = req.id_user

    try {
      const postFields = {
        img_src: req.file.filename,
        title,
        text,
        posted_by: id_user
      }

      const post = await Post.create(postFields);

      return res.status(200).json({ post })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao criar Post" })
    }
  },
//   async updatePost(req, res) {
//     const { idEmpresa } = req.params

//     try {
//       if (!await Empresa.findById(idEmpresa)) {
//         return res.status(404).json({ error: 'Empresa não existe' });
//       }

//       const empresa = await Empresa.updateOne({_id: idEmpresa},{ ...req.body });

//       return res.status(200).json({ empresa })
//     } catch (error) {
//       console.log(error)
//       return res.status(400).json({ error: "Falha ao atualizar Empresa" })
//     }
//   },
  async deletePost(req, res) {
    const { idPost } = req.params

    try {
      if (!await Post.findById(idPost)) {
        return res.status(404).json({ error: 'Post não existe' });
      }

      await Post.deleteOne({_id: idPost});

      return res.status(200).json({mensagem: "Post apagada com sucesso"})
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: "Falha ao apagar Post" })
    }
  },
}