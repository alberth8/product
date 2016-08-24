// environment variables
require('dotenv').config({ path: './server/config/dev.env' });

const express = require('express');

// const db = require('./config/connect.js');
// console.log(db);

// require routes
// ex: const shoppingCartRoute = require(./routes/shoppingCartRoute.js); 

const app = express();

// morgan, body-parser, static files
require('./config/init.js')(app, express);

// set port
app.set('port', process.env.PORT || 3000);

// invoke the required routes
// ex: shoppingCartRoute(app);

// wildcard route
app.get('/*', (req, res) => res.redirect('/'));

// bind and listen to connections on specified port
app.listen(app.get('port'), () => {
  console.log(`Express server started in ${app.get('env')} mode on port ${app.get('port')}`);
});

module.exports = app;