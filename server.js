const express = require('express');
const path = require('path');
const app = express();
const port = 4000; // Cambia el puerto aquí

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de login (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.status(200).send(`Usuario ${username} autenticado`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
