const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('../routes/authRoutes.js');

module.exports = (app, express) => {
  // express middleware
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // required for passport
  // require('./passport.s')(passport); // pass passport for config
  app.use(session({
    secret: process.env.SESSION_SECRET,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // route
  authRoutes(app, passport);

  // static files
  app.use(express.static(`${__dirname} /../../client/public/`));
};
