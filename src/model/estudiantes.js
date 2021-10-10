const mongoose = require("mongoose")

const schema = mongoose.Schema({
	nombre: String,
	codigo: String,
    materia: String,
    nota: Number
})

module.exports = mongoose.model("estudiantes", schema)