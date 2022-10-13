const User = require("../models/user");
const bcrypt = require('bcrypt');
const ctrlUser = {};

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlUser.getUser = async (req, res) => {
    const id = req.user._id
    // Se consultan todos los documentos de la base de datos.
    const users = await User.findById(id);

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(users)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlUser.postUser = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

    // Encriptar la contraseña del usuario
    const newPassword = bcrypt.hashSync(password, 10);

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUser = new User({
        username,
        password: newPassword,
        email
    });

    // Se almacena en la base de datos con método asícrono .save()
    const user = await newUser.save();
console.log(user)
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlUser.putUser = async (req, res) => {

    const userId = req.params.id;

    const { username, email, isActive, role, ...otraData } = req.body;

    const data = { username, email, isActive, role };

    try {
        const dataUpdated = await User.findByIdAndUpdate(userId, data, { new: true});

        return res.json({
            msg: 'Usuario actualizado correctamente',
            dataUpdated
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al actualizar usuario'
        })
    }
};

// Controlador para eliminar usuario, requiere ID de usuario.
    
ctrlUser.deleteUser = async (req, res) => {
    const id = req.params.id_user
   // const {title, descripcion} = req.body
try{
    if(!id){
        return res.status(400).json({
            message:"No hay id en la ruta"
        })
    }
    // await tareaModel.findOneAndDeleteid,{descripcion,title},(err,docs)=>{
    const user =  await tareaModel.findOne({$and:[{_id:id},{active:true}]});
    if(!user){
        return res.status(404).json({
            message:"No se encuentra la tarea"
        })
    }
    await user.updateOne({active:false})    
    
        
        return res.json({
            msg: 'la eliminacion se ha realizado correctamente'
        })

    }catch(error) {
        console.log(error)
       }
           
    }

module.exports = ctrlUser;