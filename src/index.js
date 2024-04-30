const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const usuarioroutes = require ("./routes/usuario")

const app = express()

const port = process.env.PORT || 9000

//El middleware es un software con el que las diferentes aplicaciones se comunican entre sí
app.use(express.json())
app.use('/api',usuarioroutes)


//routes

app.get('/', (req, res) => {
    res.send('bienvenido al servidor')
})

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI,)
.then(() => console.log('connected to mongodb atlas')) 
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port))