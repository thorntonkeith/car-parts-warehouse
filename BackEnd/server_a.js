//Using Express Library and Framework for server-side development and routing
const express = require("express");
const app = express();
const port = 4000;

// parse application/x-www-form-urlencoded
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

//Implementing Cors for cross-origin resource sharing
const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Connecting server to MongoDB database
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.xqy1dav.mongodb.net/car_parts?retryWrites=true&w=majority"
  );
}

//Specifying which schema to use for adding data to MongoDB
const carPartSchema = new mongoose.Schema({
  name: String,
  image: String,
  make: String,
  partNo: Number,
});

//Using the schema to  create new "carPart" database model
const carPartModel = mongoose.model("car_parts", carPartSchema);

//Using HTTP Post method to retrieve data from form and post to server
app.post("/api/car_parts", (req, res) => {
  console.log(req.body);

  //Specifying which attributes to send to server
  carPartModel.create({
    name: req.body.name,
    image: req.body.image,
    make: req.body.make,
    partNo: req.body.partNo
  });

  res.send("Part Added");
});

//HTTP Get method to  display JSON data
app.get("/api/car_parts", (req, res) => {
  carPartModel.find((error, data) => {
    res.json(data);
  });
});

//HTTP Get method to find ar part in database using unique id
app.get("/api/car_parts/:id", (req, res) => {
  console.log(req.params.id);
  carPartModel.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

//HTTP Put method to edit part in database using unique id
app.put("/api/car_parts/:id", (req, res) => {
  console.log("Updated: " + req.params.id);

  carPartModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, data) => {
      res.send(data);
    }
  );
});

//HTTP Delete method to delete part in database using unique id
app.delete("/api/car_parts/:id", (req, res) => {
  console.log("Delete: " + req.params.id);
  carPartModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send(data);
  });
});

//HTTP Listener
app.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});
