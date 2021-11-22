const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
});

const workoutSchema = new mongoose.Schema({
  day: Date,
  exercises: [
    {
      resistancetype: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const workoutModel = mongoose.model("Workout", workoutSchema);

module.exports = workoutModel;
