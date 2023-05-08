import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const app = express()

mongoose.connect('mongodb://alemol:pass@localhost:27017/ejemplos?authSource=admin')

app.get('/', async (_req, res) => {
    console.log('listando... chanchitos...')
    const animales = await Animal.find();
    return res.json(animales)
})
app.get('/crear', async (_req, res) => {
    console.log('creando...')
    await Animal.create({ tipo: 'Francisco', estado: 'Feliz' })
    return res.json('ok')
})

app.listen(3000, () => console.log('listening...'))