const router = require('express').Router();
const { puttareas, gettareas, posttareas, deletetareas } = require('../controllers/tareas.controllers');

const validarJWT = require('../middlewares/validar-jwt');

// Crear nueva tarea
router.post('/tareas', [
    validarJWT
], posttareas);


router.get('/tareas', [
    validarJWT
], gettareas);

router.put('/tareas/:id_tareas', [
    validarJWT
], puttareas);

router.delete('/tareas/:id_tareas', [
    validarJWT
], deletetareas);



// Se exporta el objeto router que contiene las rutas
module.exports = router;