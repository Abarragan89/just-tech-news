const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// db connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
// allow express to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// make css static files
app.use(express.static(path.join(__dirname, 'public')));
// Turn on routes
app.use(routes);
// set up handlebars connection
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
// turn on connection to db and server
sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log('Now listening'));
    });