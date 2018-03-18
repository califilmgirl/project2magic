var db = require("../models");

module.exports = function(app) {


  app.get("/api/gameInfo", function(req, res) {
    db.Gameinfo.findAll({}).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.post("/api/gameInfo", function(req, res) {
    db.Gameinfo.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.put("/api/gameInfo", function(req, res) {
    db.Gameinfo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGame) {
        res.json(dbGame);
      });
  });

  app.delete("/api/gameInfo/:id", function(req, res) {
    db.Gameinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

};
