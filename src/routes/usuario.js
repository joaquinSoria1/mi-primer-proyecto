const express = require('express')
const esquemadelusuario = require("../models/usuarios")
const router = express.Router()

// crear usuario 
router.post('/usuarios', (req, res) => {
    const user = esquemadelusuario(req.body)
    user
      .save()
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//obtener todos los usuarios
router.get('/usuarios', (req, res) => {
    esquemadelusuario
      .find()
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//obtener un usuario especifico 
router.get('/usuarios/:id', (req, res) => {
    const {id} = req.params
    esquemadelusuario
      .findById(id)
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//actualizar un usuario
router.put('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const {nombre,edad,gmail} = req.body
    esquemadelusuario
      .updateOne({ _id: id}, { $set: {nombre, edad, gmail} })
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params
  esquemadelusuario
  .deleteOne({ _id: id })
  .then((data) => res.json(data))
  .catch((err) => res.json({message:error}))
})


module.exports = router