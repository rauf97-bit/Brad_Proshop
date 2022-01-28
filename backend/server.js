import express from 'express'
// import products from './data/products.js'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Routes from './routes/productRoute.js'

dotenv.config()
const app = express();
connectDB()

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`.bold.yellow))

app.get( '/', (req, res) => {
  res.send('App is Running')
})

app.use('/api/products', Routes)