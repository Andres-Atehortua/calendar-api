const express = require('express');
require('dotenv').config();
const compression = require('compression');

// Crear servidor de express

const app = express();

// Directorio público

app.use(compression());
app.use(express.static('public'));

// Parsear el body

app.use(express.json());

// Rutas

app.use('/api/auth', require('./routes/auth.routes'));

// Escuchar peticiones

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
