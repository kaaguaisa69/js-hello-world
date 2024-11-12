// Importar el módulo Express
const express = require('express');
const app = express();

// Puerto donde se va a ejecutar el servidor
const port = 3000;

// Servir el archivo index.js como respuesta en la ruta raíz
app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
