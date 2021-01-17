const express = require("express");
const router = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer')

const updateImage = multer(multerConfig)

const Authorization = require("./shared/Authorization");

const AuthController = require('./controllers/AuthControoler');
const EmpresaController = require("./controllers/EmpresaController");
const PostController = require("./controllers/PostController");


router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/empresas', Authorization, EmpresaController.getEmpresas);
router.get('/empresas/:idEmpresa', Authorization, EmpresaController.getEmpresa);
router.post('/empresas', Authorization, EmpresaController.registerEmpresa);
router.put('/empresas/:idEmpresa', Authorization, EmpresaController.updateEmpresa);
router.delete('/empresas/:idEmpresa', Authorization, EmpresaController.deleteEmpresa);

router.get('/posts', Authorization, PostController.getPosts);
router.get('/posts/:idPost', Authorization, PostController.getPost);
router.post('/posts', updateImage.single('image'), Authorization, PostController.cratePost);
router.delete('/posts/:idPost', Authorization, PostController.deletePost);

module.exports = router;
