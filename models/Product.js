const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  owner: {
    type: String, 
    default: 'Unknown',
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'must provide description'],
    trim: true
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

