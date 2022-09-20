/* 
* Archivo de configuración de la aplicación
* En este archivo se configuran los parámetros de la aplicación
* como ser: el puerto, variables de entorno, rutas y middlewares 
*/

const path = require('path');
const express = require('express'); // Importando librería express
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
const dbConnect = require('./src/db/connection_db'); // Se importa la función de conexión a la BD.
dotenv.config()
// Inicializaciones
const app = express(); // Inicializando la librería express
dbConnect(); 
// Se inicializa la conexión a la Base de Datos
/* cuando tengas internet hace correr ese comando, para descargarte la dependencia de cors, necesita eso primero
pero y esta configurado tu base de datos, se va a conectar a este */

// Configuraciones
const port = process.env.PORT || 3000;


// MIDDLEWARES
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato json



// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Importando rutas

app.use(require('./src/routes/user.routes')); // Importando rutas
app.use(require('./src/routes/tareas.routes')); // Importando rutas

// Configurando puerto
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));


// Instalar dependecias con npm install
// Installar nodemon con npm i nodemon -D
// Ejecutar con: npm run dev
// Para detener el servidor: Hacer un clic en la terminal y presionar Ctrl + C