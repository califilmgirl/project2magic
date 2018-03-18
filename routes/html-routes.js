// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the 
// various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isSignupAuthenticated = require("../config/middleware/isSignupAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the "initial" page
    if (req.user) {
      res.redirect("/initial");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the "initial" page
    if (req.user) {
      res.redirect("/initial");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the createleague page
    if (req.user) {
      res.redirect("/createleague");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/initial", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/initial.html"));
  });

  //Modified by Venkat
  // app.get("/createleague", isAuthenticated, function(req, res) {
  app.get("/createleague", isSignupAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createleague.html"));
  });

};
