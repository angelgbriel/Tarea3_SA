const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send("<a href='https://github.com/angelgbriel/Tarea3_SA/archive/master.zip'>Descargar Archivo </a>")
});

app.listen(8080, () => {
  console.log('INICIALIZADO EN EL PUERTO 8080')
});
