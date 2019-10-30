const db = require('../models');
const User = require('../models/user');
const passport = require('passport');

module.exports = {

  findByUsername: function (req, res) {
    User
      .find( { 'username' : { '$regex' : req.params.username, '$options' : 'i' } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  passportLogin: function(req, res){
    passport.authenticate('local'), function (req, res) {
      // Log in and send back user information
      res.json(req.user);
    }
  },
  
  login : function (req, res) {
    // Check to see if user is logged in
    if (req.user) {
      // If logged in, send back this flag and the username itself
      res.json({isLoggedIn: true, username: req.user.username, email: req.user.email});
    } else {
      // If user isn't logged in, send back false
      res.json({isLoggedIn: false});
    }
  },
  register: function (req, res) {
    User.findByUsername(req.body.username)
      .then(dbModel => {
        if (dbModel === null) {
          User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function (err) {
            if (err) {
              console.log('error while user register!', err);
              return res.status(422).json(err);
            }
    
            passport.authenticate('local')(req, res, function () {
              if (err) {
                console.log('error while user login!', err);
                return res.status(422).json(err);
              }
              res.json(true);
            });
          });
        }//if dbModel === null
        else {
          res.json(dbModel);
        }
      })     
  }
};