// const User = require('../models/order.js');
const stripe = require('stripe')(process.env.STRIPE_APIKEY);

const createStripAccount = (email, token, name, callback) => {
  stripe.customers.create(
    { 
      email: email,
      description: name,
      source: token, // token returned by Stripe.js
    }, 
    (err, customer) => {
      if (err) {
        console.log(err); // TODO: How to handle error?
      }
      callback(customer); // the created customer object
    }
  );
}; 

module.exports = {
  createStripAccount,
};