const mongoose = require('mongoose');

//const user = '';
//const possword = '' ;
//const url = '' ;
const dbConnect = () => {
    try {// ese /pruebadb es el nombre de la base de datos dentro de tu local, no está
        // las colecciones y su contenido se van a ir creando automaticamente si que de eso no hay problema
        mongoose.connect( 'mongodb+srv://LEANDRO2:12345@cluster0.ejz9oz5.mongodb.net/DBPRUEBA?retryWrites=true&w=majority' , {
        useNewUrlParser: true,
         useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;