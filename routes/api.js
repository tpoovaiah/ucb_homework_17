const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        console.log("dbWorkout"+dbWorkout)
        res.json(dbWorkout)
        
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, { new: true, runValidators: true })
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        console.log("err"+err)
        res.status(400).json(err);
      });
})

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        console.log("GET dbWorkout"+dbWorkout)
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

router.get("/api/workouts/stats", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

router.delete("/api/workouts/:id", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

module.exports = router