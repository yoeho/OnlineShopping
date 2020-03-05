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
const mongoose = require('mongoose');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');

//import from models
const User = require('./models/user');

//import from route module 
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


// must be top of the use
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById("5e5f531bc61492190882f6f4")
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
})

app.use('/admin', adminRoute);
app.use('/', shopRoute);

app.use((req, res, next) => {
    res.render('404',
        {
            pageTitle: "Page Not Found",
            path: ''
        });
});
mongoose.connect('mongodb+srv://min:min123@cluster1-sukjl.mongodb.net/shop', { useNewUrlParser: true })
    .then(result => {
        User.findOne()
            .then(user => {
                if (!user) {
                    const user = new User({
                        name: 'John',
                        email: 'john@gmail.com'
                    })
                    user.save();
                }
            })
        console.log('Connection DB....');
        app.listen(3000)
    })
    .catch(err => {
        console.log(err);
    })