const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  stripeCustomerId: { // create a stripe customer when the user is created
    type: String,
    required: true,
  }, 
  cart: {
    logo: String,
    products: [{
      type: ObjectId,
      ref: 'products',
    }],
    deliveryName: String,
    deliveryAddress: [String],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User; 