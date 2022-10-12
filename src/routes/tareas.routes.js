const router = require('express').Router();
const { puttareas, gettareas } = require('../controllers/task.controllers');

const validarJWT = require('../middlewares/validar-jwt');

// Crear nueva tarea
router.post('/task', [
    validarJWT,
], pottareas);


router.get('/task', [
    validarJWT
], gettareas);

router.put('/task/:id_tareas', [
    validarJWT
], puttareas);

router.delete('/task/:id_tareas', [
    validarJWT
], deletetareas);



// Se exporta el objeto router que contiene las rutas
module.exports = router;