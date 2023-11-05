const express = require("express");
const router = express.Router();
const userController = require("../controllers/humidityController");
router.route("/").get(userController.getAllHumidity).post(userController.postHumidity);

router
  .route("/:id")
  .get(userController.getHumidity)
  .patch(userController.updateHumidity)
  .delete(userController.deleteHumidity);

module.exports = router;
