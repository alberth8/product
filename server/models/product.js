const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  styleNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  description: String,
  images: [{
    url: String,
    logoTopLeft: {
      x: Number,
      y: Number,
    },
    logoBottomRight: {
      x: Number,
      y: Number,
    },
  }],
  price: [{
    minQty: Number,
    value: Number,
  }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;