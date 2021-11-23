const router = require("express").Router();
const workoutModel = require("../models/workoutModel");

router.get("/api/workouts", function (req, res) {
  workoutModel
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
    .then((data) => {
      res.json(data);
    });
});

// workoutModel
//   .find({})
//   .populate("exercises")
//   .exec((err, data) => {
//     console.log(err);
//     console.log(data);
//     res.json(data);
//   });

router.post("/api/workouts", function (req, res) {
  workoutModel
    .create({ day: new Date() })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  workoutModel
    .findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  workoutModel
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
