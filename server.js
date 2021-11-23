const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const workoutModel = require("./models/workoutModel");
const apiroutes = require("./api/apiroutes");
const htmlroutes = require("./api/htmlroutes");

app.use(express.static("public"));
app.use(express.json());
router.use(apiroutes);
router.use(htmlroutes);

app.use("/", router);
app.listen(process.env.PORT || 3000);

module.exports = router;
