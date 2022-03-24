const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
// helper functions
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// db connection
const sequelize = require('./config/connection');
// create session storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;
// allow express to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// make css static files
app.use(express.static(path.join(__dirname, 'public')));
// session storage
app.use(session(sess));
// Turn on routes
app.use(routes);
// set up handlebars connection
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
// turn on connection to db and server
sequelize.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => console.log('Now listening'));
    });