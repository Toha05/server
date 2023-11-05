const moongose = require("mongoose");
const humiditySchema = new moongose.Schema({

  humidity: {
    type:Number,
    required:true
  },
  time: {
    type:String,
    required:true
  }
});
const Humidity = moongose.model("Humidity", humiditySchema);
module.exports = Humidity;
