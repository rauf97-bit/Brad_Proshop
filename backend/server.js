import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`))

app.get( '/', (req, res) => {
  res.send('App is Running')
})

app.get( '/api/products', (req, res) => {
  res.json(products)
})

app.get( '/api/products/:id', (req, res) => {
  const product = products.find(prod => prod._id === req.params.id)
  res.json(product)
})