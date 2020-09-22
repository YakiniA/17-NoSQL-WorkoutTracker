var db = require("../models");


module.exports = function(app) {

 app.post("/api/workouts/", (req, res) => {
     db.workout.create({})
       .then(workouts => {
        console.log("Created successfully" +workouts);
         res.json(workouts);
       })
       .catch(err => {
         res.status(400).json(err);
       });
   });

   app.put("/api/workouts/:id", ({body, params}, res) => {
     console.log("ParamsId" +params.id);
    db.workout.findOneAndUpdate({_id: params.id} , { $push: { exercises: body } },  { useFindAndModify: false, new: true , runValidators: true })
       .then(workouts => {
         console.log("Updated successfully" +workouts);
 
         res.json(workouts);
       })
       .catch(err => {
         res.json(err);
       });
   });
   
  app.get("/api/workouts/", (req, res) => {
    db.workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
}
  