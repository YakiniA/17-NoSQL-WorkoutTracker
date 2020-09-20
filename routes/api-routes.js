var db = require("../models");


module.exports = function(app) {

 app.post("/api/workouts/", ({ body }, res) => {
     db.workout.create({})
       .then(workouts => {
         res.json(workouts);
       })
       .catch(err => {
         res.status(400).json(err);
       });
   });

  app.get("/api/workouts/", (req, res) => {
    db.workout.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//   app.put("/api/workouts/", ({ body }, res) => {
//     db.workout.create(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  app.put("/api/workouts:id", ({body, params}, res) => {
   db.workout.findOneAndUpdate(params.id, { $push: { exercises: body } },  { new: true})
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

}
  