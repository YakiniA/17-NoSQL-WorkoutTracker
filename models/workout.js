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

        sets: Number,

        reps: Number,

        distance:Number
    },

 
]

});

WorkoutSchema.methods.totalDuration = function() {
    console.log("This.exercises" +this.exercises);
    this.exercises.reduce((total , data) => {
    console.log(total+ data.duration);
    return total+ data.duration;
});
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;