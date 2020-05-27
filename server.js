if (process.env.NODE_ENV !== 'production') {
    console.log('loading dev environments');
    require('dotenv').config();
}
const config = require("./config");
const express = require('express');
//const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// Connect to the Mongo DB
mongoose.connect(config.MONGODB_URI);
const routes = require("./routes");
//const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || config.port;
// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(session({
//   secret: process.env.APP_SECRET || 'this is the default passphrase',
//   store: new MongoStore({ mongooseConnection: dbConnection }),
//   resave: false,
//   saveUninitialized: false
// }));
// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser
// If its production environment!
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // console.log('YOU ARE IN THE PRODUCTION ENV');
    app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/'))
    });
}
// Add routes, both API and view
app.use(routes);
// Error handler
app.use(function(err, req, res, next) {
    console.log('====== ERROR =======');
    console.error(err.stack);
    res.status(500);
});
// Starting Server
app.listen(PORT, () => {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});