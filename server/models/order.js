const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./config/connect.js');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);

const orderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  orderId: { // TODO: auto increment this starting at 100000
    type: Number,
    unique: true,
  },
  status: String,
  deliveryName: String,
  deliveryAddress: [String],
  logo: String,
  products: [{
    styleId: String,
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
    price: Number,
  }],
  stripeChargeId: String,
});

orderSchema.plugin(autoIncrement.plugin, {
  model: 'Order', 
  field: 'orderId',
});
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;