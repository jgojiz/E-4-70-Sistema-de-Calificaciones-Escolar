// Con esta API se definen las tareas que el servidor realiza sobre los datos
// crea y almacena las rutas
const express = require('express');
const router = express.Router(); 
const estudiantes = require("../model/estudiantes");

// definir las rutas
router.get('/', (req, res) => {
    res.send('API Tasks')
});

router.get('/obtenercalificaciones', async (req, res) => {
	const consultaEstudiantes = await estudiantes.find();
	res.send(consultaEstudiantes);
});

router.get('/obtenerporcodigo', async (req, res) => {
	const consultaEstudiantes = await estudiantes.find({codigo: req.body.codigo});
	res.send(consultaEstudiantes);
});

router.get('/obtenerpornombre', async (req, res) => {
	const consultaEstudiantes = await estudiantes.find({nombre: req.body.nombre});
	res.send(consultaEstudiantes);
});


router.post('/subir', async (req, res) => {
    console.log('req.body', req.body);
	const nuevo = new estudiantes({
        nombre: req.body.user_name,
        codigo: req.body.user_codigo,
        materia: req.body.user_materia,
        nota: req.body.user_nota
	})
	await nuevo.save();
    if (nuevo) res.send('Registro guardado');
    // res.redirect('https://app.example.io');
});

// exportar rutas
module.exports = router; // exporto el router para usarlo en otras partes de mi app