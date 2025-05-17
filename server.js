// server.js
const express = require('express');
const app = express();
const port = 3000;

// Datos simulados: frases motivadoras
const frases = [
  { id: 1, texto: "Cree en ti y todo será posible." },
  { id: 2, texto: "Cada día es una nueva oportunidad para cambiar tu vida." },
  { id: 3, texto: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito." },
];

// Ruta para ver todas las frases motivadoras
app.get('/frases', (req, res) => {
  res.json(frases);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

