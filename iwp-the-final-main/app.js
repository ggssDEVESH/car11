const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const compression = require('compression');

const electricRouter = require('./routes/electric_index');
const gasRouter = require('./routes/gas_index');
const electronicsRouter = require('./routes/electronics_index');
const servicesRouter = require('./routes/services');
const teamRouter = require('./routes/team');

const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const adminRouter = require('./routes/admin');
var UserModel = require("./models/CustomerModel");
var ServicesModel = require("./models/ServiceModel");
var ContactModel = require("./models/ContactModel");
const app = express();


//Connecting to Mongodb
const db = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/cars', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log("MongoDB connected");

    } catch (err) {
        console.log("MongoDB Error : Failed to connect");
        console.log(err);
        process.exit(1);
    }
}

db();


// view engine setup
app.engine('.hbs', exphbs({
    defaultLayout: 'layout', extname: '.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

console.log("App running on Localhost:5000");


// Routing
app.get('/', (req, res) => {
    res.redirect('/home');
});


app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/routes/home.html");
});

app.use('/admin', adminRouter);
app.use('/electric', electricRouter);
app.use('/gas', gasRouter);
app.use('/electronics', electronicsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/team', teamRouter);

//Users
app.post('/customer', async (req, res) => {

    const user = new UserModel({
        name: req.body.username,
        email: req.body.useremail,
        phone: req.body.userphone
    })

    const user_res = await user.save();
    console.log(user_res);
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(5000,console.log(`server running in 5000`))

module.exports = app;
