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
    const {title, descripcion,} =req.body
    const datos ={title, descripcion,}
    try{
    const respuesta = await tareaModel.findByIdAndUpdate(id,datos,{new:true })
    res.json(respuesta)
    }catch(error){
    return res.json({message:error.message})
        }
    };

    ctrltareas.deletetareas = async (req, res) => {
        const id = req.params.id_tareas
       // const {title, descripcion} = req.body
    try{
        if(!id){
            return res.status(400).json({
                message:"No hay id en la ruta despues de /task/"
            })
        }
        // await tareaModel.findOneAndDeleteid,{descripcion,title},(err,docs)=>{
        const tarea =  await tareaModel.findOne({$and:[{_id:id},{active:true}]});
        if(!tarea){
            return res.status(404).json({
                message:"No se encuentra la tarea"
            })
        }
        await tarea.updateOne({active:false})    
        
            
            return res.json({
                msg: 'la eliminacion se ha realizado correctamente'
            })
    
        }catch(error) {
            console.log(error)
           }
               
        }
            

module.exports = ctrlTask;