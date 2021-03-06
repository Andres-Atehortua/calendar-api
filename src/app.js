const express = require('express');
require('dotenv').config();
const compression = require('compression');
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear servidor de express

const app = express();

// Conexión a la base de datos

dbConnection();

// Cors

app.use(cors());

// Directorio público

app.use(compression());
app.use(express.static('public'));

// Parsear el body

app.use(express.json());

// Rutas

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/events', require('./routes/events.routes'));

// Escuchar peticiones

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
