// Con esta API se definen las tareas que el servidor realiza sobre los datos

const express = require('express');
const router = express.Router(); // crea y almacena las rutas

// almacenar las rutas
router.get('/', (req, res) => {
    res.send('API Tasks')
});

module.exports = router; // exporto el router para usarlo en otras partes de mi app