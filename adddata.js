require('dotenv').config()

const connectDB = require('./database/connectdb')
const product = require('./models/Product')
const jsonProduct = require('./database/products.json')

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
