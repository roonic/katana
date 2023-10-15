const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  Price: {
    type: String,
    default: '$69.00',
  },
  Specifications: {
    type: Object,
  },
  Description: {
    type: String,
    required: [true, 'must provide description'],
    trim: true
  },
  Dimensions: {
    type: Object,
  },
  rating: {
    type: Number,
    default: 4.3,
  },
  availability: {
    type: Boolean,
    default: true
  },
})

module.exports = mongoose.model('Product', ProductSchema)

