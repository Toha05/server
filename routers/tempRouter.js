const express = require("express");
const router = express.Router();
const tempController = require("../controllers/tempController");

router
  .route("/")
  .get(tempController.getAllTemp)
  .post(tempController.checkBody, tempController.postTemp);

router
  .route("/:id")
  .get(tempController.getTemp)
  .patch(tempController.updateTemp)
  .delete(tempController.deleteTemp);

module.exports = router;
