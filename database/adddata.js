require('dotenv').config()

const connectDB = require('./connectdb')
const product = require('../models/Product')
const jsonProduct = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await product.insertMany(jsonProduct)
    console.log('success')
  } catch(error) {
    console.log(error)
  }
}

start()
