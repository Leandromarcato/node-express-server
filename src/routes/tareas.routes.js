const router = require('express').Router();

// Importando controladores
const {
    gettareas,
    posttareas,
    puttareas,
    deletetareas,

} = require('../controllers/tareas.controllers');

// Definiendo rutas

// Ruta para obtener todos los usuarios
router.get('/tareas', gettareas);

// Crear nuevo usuario
router.post('/tareas', posttareas);

// Editar tareas, requiere ID de usuario
router.put('/tareas', puttareas);

// Eliminar tareas, requiere ID de usuario
router.delete('/tareas', deletetareas);



// Se exporta el objeto router que contiene las rutas
module.exports = router;