// Con esta API se definen las tareas que el servidor realiza sobre los datos
// crea y almacena las rutas
const express = require('express');
const router = express.Router(); 

// definir las rutas
router.get('/', (req, res) => {
    res.send('API Tasks')
});

// exportar rutas
module.exports = router; // exporto el router para usarlo en otras partes de mi app