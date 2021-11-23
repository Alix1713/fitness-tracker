const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

const workoutSchema = new mongoose.Schema({
  day: Date,
  exercises: [
    {
      type: String,
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
