var db = require("../models");


module.exports = function(app) {

app.post("/api/workouts/", ({ body }, res) => {
    db.workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/", (req, res) => {
    db.workout.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  

}
  