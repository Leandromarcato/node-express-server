// El método Router() de Express nos permite crear rutas
const router = require('express').Router();

// Importando controladores
const {
    getUser,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');
const esAdmin = require('../middlewares/es-admin');
const validarJWT = require('../middlewares/validar-jwt');

// Definiendo rutas

// Ruta para obtener todos los usuarios
router.get('/user',[
    validarJWT,
    esAdmin
] ,getUser);

// Crear nuevo usuario
router.post('/user', [
    validarJWT
], postUser);

// Editar usuario, requiere ID de usuario
router.put('/user/:id', [
    validarJWT
], putUser);

// Eliminar usuario, requiere ID de usuario
router.delete('/user/:id_user', [
    validarJWT
], deleteUser);



// Se exporta el objeto router que contiene las rutas
module.exports = router;