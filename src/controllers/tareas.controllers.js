const tareaModel = require("../models/tareas");

ctrlTask = {};


ctrlTask.postareas = async (req, res) => {
    const { title, description } = req.body;

    const task = new Tasks({
        title,
        description,
        userId: req.user._id
    });


    try {
        const newTask = await task.save();

        return res.json({
            msg: 'Tarea creada correctamente',
            newTask
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al crear la tarea'
        })
    }
}

ctrlTask.gettareas = async (req, res) => {
    const tasks = await tareaModel.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}

ctrlTask.puttareas = async (req, res) => {
    const id=req.params.id_tareas
    const {title, descripcion,estados} =req.body
    try{
    const respuesta = await tareaModel.findByIdAndUpdate(id,{descripcion,title, estados})
    res.json(respuesta)
    }catch(error){
    return res.json({message:error.message})
        }
    };



module.exports = ctrlTask;