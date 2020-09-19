const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
 {
  day: {
  type: Date,
  default: new Date
},
exercises: [
    {
        type:{
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration"
        },
        weight: Number,

        steps: Number,

        reps: Number,

        distance:Number
    }
]
});

const workouts = mongoose.model("workouts", WorkoutSchema);

module.exports = workouts;