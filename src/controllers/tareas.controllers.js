const tareas = require("../models/tareas");

const ctrltareas = {};

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrltareas.gettareas = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tareas = await tarea.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tarea)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrltareas.posttareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { title, descripcion, estados } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newtareas = new tareas({
        title,
        descripcion,
        estados
    });

    // Se almacena en la base de datos con método asícrono .save()
    const tarea = await new tarea.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
};

// Controlador para actualizar una tarea
ctrltareas.puttareas = async (req, res) => {
    return res.json({
        msg: ''
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrltareas.deletetareas = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrltareas;