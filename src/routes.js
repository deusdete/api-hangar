const express = require("express");
const router = express.Router();

const Authorization = require("./shared/Authorization");

const AuthController = require('./controllers/AuthControoler');
const EmpresaController = require("./controllers/EmpresaController");


router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/empresas', EmpresaController.getEmpresas);
router.get('/empresas/:idEmpresa', EmpresaController.getEmpresa);
router.post('/empresas', Authorization, EmpresaController.registerEmpresa);
router.put('/empresas/:idEmpresa', Authorization, EmpresaController.updateEmpresa);
router.delete('/empresas/:idEmpresa', Authorization, EmpresaController.deleteEmpresa);

module.exports = router;
