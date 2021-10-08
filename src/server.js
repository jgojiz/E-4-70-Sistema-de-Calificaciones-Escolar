// create server
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const app = express();
mongoose.connect('mongodb://localhost/sample_restaurants')
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));

const uri = "mongodb+srv://rootMinTICG70-4:dJ0W7sLmtcqKsjZq@cluster0.1e51s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("sample_restaurants").collection("neighborhoods");
    // perform actions on the collection object
    collection.find().toArray((err, name) => {
        console.log(name)
    })
    client.close();
});


// settings
app.set('port', process.env.PORT || 3000);

// middlewares -> execute before sending to routes
app.use(morgan('dev')); // quiero ver los tiempos de ejecucion del comando dev definido en package.json
app.use(express.json()); // con esto el server puede entender los archivos json que reciba

// routes -> urls para las acciones del server
app.use('/tasks', require('./routes/tasks'));

// static files -> server send them once to the client
app.use(express.static(__dirname + '/public'));

// server is listening
app.listen(app.get('port'), () => {
    console.log('server is on port', app.get('port'));
})