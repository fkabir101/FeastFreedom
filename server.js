const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy


const app = express();


const PORT = process.env.PORT || 3000;

//for logging in

app.use(morgan('dev')); // for logging

//To keep track of user's login status
app.use(session({secret: "keyboard dog", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));//not sure about this
app.use(routes);

//set up passport to authenticate
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/feastfreedom", {useUnifiedTopology: true})


app.use(express.static(__dirname + '/dist/FeastFreedom'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/FeastFreedom/index.html'));
});

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})