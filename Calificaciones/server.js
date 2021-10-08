// create server
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// settings
app.set('port', process.env.PORT || 3000);

// middlewares -> execute before sending to routes
app.use(morgan('dev')); // quiero ver los tiempos de ejecucion del comando dev definido en package.json
app.use(express.json()); // con esto el server puede entender los archivos json que reciba

// routes -> urls del server
app.use('/tasks', require('./routes/tasks'));

// static files -> server send them once to the client
app.use(express.static(__dirname + '/public'));

// server is listening
app.listen(app.get('port'), () => {
    console.log('server is on port', app.get('port'));
})