const express = require('express')
const esquemaderopa = require('../models/ropas');
const router = express.Router()

// crear usuario 
router.post('/ropas', (req, res) => {
    const user = esquemaderopa(req.body)
    user
      .save()
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//obtener todos los usuarios
router.get('/ropas', (req, res) => {
    esquemaderopa
      .find()
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//obtener un usuario especifico 
router.get('/ropas/:id', (req, res) => {
    const {id} = req.params
    esquemaderopa
      .findById({id:id})
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//actualizar un usuario
router.put('/ropas/:id', (req, res) => {
    const {prenda, marca, cantidad, precio_por_unidad, id} = req.body
    esquemaderopa
      .updateOne({ id: id}, { $set: {prenda, marca, cantidad, precio_por_unidad, id} })
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}))
})

//eliminar un usuario
router.delete('/ropas/:id', (req, res) => {
  const { id } = req.params
  esquemaderopa
  .deleteOne({ id: id })
  .then((data) => res.json(data))
  .catch((err) => res.json({message:error}))
})


module.exports = router