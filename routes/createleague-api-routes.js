var db = require("../models");

module.exports = function(app) {

  // POST route for saving a new post
  app.post("/api/createleague", function(req, res) {
    db.League.create(req.body).then(function(dbLeague) {
      res.json(dbLeague);
      console.log("League Added in Database");
      res.redirect("/initial");
    });
  });

}


