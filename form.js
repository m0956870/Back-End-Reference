const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// MONGOOSE
const mongoose = require("mongoose");

// MongoDB
const DB = "mongodb://localhost:27017/data";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongoose connection successfull..."))
  .catch((err) => console.log(err));

// schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
});

// Model
const User = new mongoose.model("User", schema);

const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/form.html`));
});

app.post("/data", async (req, res) => {
  try {
    // let name = req.body.name;
    // let email = req.body.email;

    let user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    let result = await user.save();
    res.sendFile(path.join(`${__dirname}/form.html`));
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

app.get("/data", async (req, res) => {
  try {
    let allUsers = await User.find();
    res.send(allUsers);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Connection successfull at ${PORT}`);
});
