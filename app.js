//terminal -> npm init
//terminal ->npm install nodemon --save-dev "for auto restart during development time"
//terminal ->npm install express
// post method -> req.body
//get method -> req.query
// need to install ->> npm install body-parser
//npm install ejs

const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express();

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');

//import from route module 
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//import from database
const mongoConnect = require('./util/database').mongoConnect;

// must be top of the use
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use('/', shopRoute);

app.use((req, res, next) => {
    res.render('404',
        {
            pageTitle: "Page Not Found",
            path: ''
        });
});
mongoConnect(() => {
    app.listen(3000);
});