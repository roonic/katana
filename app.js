const express = require('express')
const connectDB = require('./database/connectdb')
const productsRouter = require('./routes/products')
require('dotenv').config()

const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/products', productsRouter)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,() =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
