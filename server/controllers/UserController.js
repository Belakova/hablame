const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');
const mailchimpApi = require('mailchimp-api-v3');
const request = require('request');
var bcrypt = require('bcrypt-nodejs');
const SALT_WORK_FACTOR = 10;

module.exports = (app, route) => {
  var User = mongoose.model('user', app.models.user);


  app.get('/user', (req, res) => {
    res.status("200").send("This is the /user GET route");
  });

  /** Get single user **/
  app.get('/user/:id', (req, res) => {

  });
  /** Create a new account **/
  app.post('/user', (req, res) => {
    /**   var firstname = req.body.firstname || '';
      var surname = req.body.surname || '';
      var spokenLanguages = req.body.spokenLanguages || '';
      var learningLanguages = req.body.learningLanguages || '';
    **/

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(req.body.password, salt, null, function(err, hash) {
        if (err) return next(err);
        req.body.password = hash;
        // temporary - app.post below
        req.body.activationToken = uuid();

        User.collection.insert(req.body, function(error, user) {
          if (error) return res.status(400).send(error);

          console.log('user created', user);
          return res.status(200).send(user.ops[0]);
        });
      });
      // ----
      // next();
    });
  });



  return (req, res, next) => {
    next();
  }
}
