// route handlers

const Humidity = require("../models/humidityModel");

//checking if the body is empty
exports.checkBody = (req, res, next) => {
  const data = req.body;
  if (!data.name || !data.price) {
    return res.status(400).json({
      status: "bad request",
    });
  }
  next();
};

//getting all the humidity
exports.getAllHumidity = async (req, res) => {
  try {
    const humidities = await Humidity.find();
    res.status(200).json(humidities);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};
//get humidity by id
exports.getHumidity = async (req, res) => {
  try {
    const humidity = await Humidity.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "successfull",
      results: 1,
      data: {
        humidity,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};
//post new humidity
exports.postHumidity = async (req, res) => {
  try {
    const newHumidity = new Humidity(req.body);
    newHumidity.time=new Date().toISOString();
    const humidity = await newHumidity.save();
    res.status(201).json({
      status: "success",
      results: 1,
      data: {
        humidity: newHumidity,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};
//update humidity
exports.updateHumidity = async (req, res) => {
  try {
    const humidity = await Humidity.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      status: "success",
      data: {
        humidity,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

//delete humidity
exports.deleteHumidity = async (req, res) => {
  try {
    await Humidity.deleteOne({ _id: req.params.id });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};
