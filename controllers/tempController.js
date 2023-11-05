// route handlers
const Temp = require("../models/tempModel");
//check the body
exports.checkBody = (req, res, next) => {
  const data = req.body;
  if (!data.temp) {
    return res.status(400).json({
      status: "bad request",
    });
  }
  next();
};
//get all the temps
exports.getAllTemp = async (req, res) => {
  try {
    const temps = await Temp.find();
    res.status(200).json(temps);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};

//get temp by the id
exports.getTemp = async (req, res) => {
  try {
    const temp = await Temp.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "successfull",
      results: 1,
      data: {
        temp,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
};
//post new temp
exports.postTemp = async (req, res) => {
  try {
    const newTemp = new Temp(req.body);
    console.log(req.body);
    newTemp.time=new Date().toISOString();
    const temp = await newTemp.save();
    res.status(201).json({
      status: "success",
      results: 1,
      data: {
        temp: newTemp,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

//update the temp
exports.updateTemp = async (req, res) => {
  try {
    const temp = await Temp.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      status: "success",
      data: {
        temp,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

//delete temp
exports.deleteTemp = async (req, res) => {
  try {
    await Temp.deleteOne({ _id: req.params.id });
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
