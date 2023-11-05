const { json } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const tempRouter = require("./routers/tempRouter");

const humidityRouter = require("./routers/humidityRouter");

const app = express();
app.use(cors());

//middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from my middleware");
  next();
});
app.use((req, res, next) => {
  req.time = new Date().toISOString();
  console.log(req.time);
  next();
});

//routes
// app.get("/api/v1/tours", getTours);

// app.get("/api/v1/tours/:id", getTour);

// app.post("/api/v1/tours", postTour);

// app.patch("/api/v1/tours/:id", updateTour);

// app.delete("/api/v1/tours/:id", deleteTour);

app.use("/api/v1/temp", tempRouter);
app.use("/api/v1/humidity", humidityRouter);

module.exports = app;
