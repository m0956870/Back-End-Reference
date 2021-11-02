// MONGOOSE
const mongoose = require("mongoose");
// const url = "mongodb+srv://username:password@cluster0.0jdbq.mongodb.net/collectionName?retryWrites=true&w=majority"

// MongoDB Atlas
// const DB = "mongodb+srv://manish:@123@cluster0.0jdbq.mongodb.net/demo?retryWrites=true&w=majority"

// MongoDB
const DB = "mongodb://localhost:27017/user";

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
  age: Number,
  gender: String,
});

// Model
const User = new mongoose.model("User", schema);

// // --demo
// let faltu = new Member({
//   name: "pata ni",
//   age: 23,
//   hobby: "vo bhi pata ni",
// });
// faltu.save();

// EXPRESS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Restful API...");
});

//PROMISE
// app.post("/api", (req, res) => {
//   console.log(req.body);
//   let user = new User(req.body);
//   user.save().then(() => {
//     res.status(201).send(user);
//   }).catch((err) => {
//     res.status(400).send(err);
//   });;
// });

// Async Await
app.post("/api", async (req, res) => {
  try {
    let newUser = new User(req.body);
    let user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(err);
  }
});

app.get("/api", async (req, res) => {
  try {
    let allUsers = await User.find();
    res.send(allUsers);
  } catch (err) {
    res.status(400).send(err);
  }
});

// find by id
app.get("/api/:id", async (req, res) => {
  try {
    // let _id = req.params;
    // console.log(_id) // { id: '60fe4d03ce13f915e88b50a4' }
    // res.send(_id)

    const id = req.params.id;
    let user = await User.findById({ _id: id });
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// Find by name
app.get("/api/:name", async (req, res) => {
  try {
    // let name = req.params; // which is after /api/<name>
    // console.log(name) // { name: 'Sanjeev' }
    // res.send(name)

    const name = req.params.name;
    let user = await User.findOne({ name: name });
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// Update by name
app.patch("/api/:name", async (req, res) => {
  try {
    let name = req.params.name;
    let user = await User.findOneAndUpdate(name, req.body, {
      new: true,
    });
    res.status(200).send(user);
    console.log(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// Update user by id
app.patch("/api/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(user);
    console.log(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// Delete user
app.delete("/api/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server established at Port no ${PORT}`);
});
