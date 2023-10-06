const Product = require('../models/Product')
const {StatusCodes} = require('http-status-codes')

const getAllProducts = async(req, res) => {
  try {
    const { name, owner } = req.query
    const queryObject = {}

    if (name) {
      queryObject.name = {  $regex: `^${name}`, $options: 'i' } 
    }

    if (owner) {
      queryObject.owner = { $regex: `^${owner}`, $options: 'i' } 
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5 
    const skip = (page - 1) * limit

    let result = await Product.find({})
      .skip(skip)
      .limit(limit)
      .where(queryObject)
      .select(['name', 'owner', 'rating', 'availability'])
    console.log(result)

    res.status(StatusCodes.OK).json({result, nbHits: result.length})
  }
  catch(err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
  }
}

const getProduct = async (req, res) => {
  try {
    const productID = req.params.id
    const product = await Product.findOne({ _id: productID })
    if (!product) {
      res.status(StatusCodes.NOT_FOUND).send(`No productID with id: ${productID}`)
    }
    res.status(StatusCodes.OK).json({ product })
  } catch(err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err})
  }
}

module.exports = {
  getAllProducts,
  getProduct
}
