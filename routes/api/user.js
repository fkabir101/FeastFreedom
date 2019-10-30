const router = require('express').Router();
const passport = require('passport');
const userController = require('../../controllers/userController'); 

// register a new user ("/api/user/register")
router
  .route('/register')
  .post(userController.register);

// login a user ("/api/user/login")
  router
  .route('/login')
  .post(passport.authenticate('local'), function (req, res) {
    // Log in and send back user information
    res.json(req.user);
  })
  .get(function (req, res) {
    // Check to see if user is logged in
    if (req.user) {
      // If logged in, send back this flag and the username itself
      res.json({isLoggedIn: true, username: req.user.username, email: req.user.email});
    } else {
      // If user isn't logged in, send back false
      res.json({isLoggedIn: false});
    }
  });
module.exports = router;