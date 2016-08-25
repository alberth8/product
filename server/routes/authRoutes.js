const authController = require('../controllers/authController.js');
require('../controllers/passportController.js');
// const passport = require('passport'); // already required in init.js


// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app, passport) {
  // login 
  app.post('/api/login', authController.login);

  // signup
  app.post('/api/signup', authController.signup);

  // profile
  // app.get('/profile', isLoggedIn, authController.getProfile), 
};