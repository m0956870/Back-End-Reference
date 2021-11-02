const mongoose = require("mongoose");
// const DB = "mongodb://localhost:27017/form-data";
const DB =
  "mongodb+srv://manish:kumar@cluster0.lagbg.mongodb.net/form-data?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection successfull...");
  })
  .catch((err) => console.log(err));

// schema
const schema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  number: Number,
  password: String,
  cpassword: String,
});

// Model
const User = new mongoose.model("User", schema);

//Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home page..");
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/register.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
    // console.log(users);
    // console.log(users[0].fname);
    // console.log(users[0].number);
  } catch (err) {
    console.log(err);
  }
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/regsiter.html`);
});

app.get("/manish", async (req, res) => {
  try {
    // let users = await User.find();
    res.sendFile(`${__dirname}/manish.html`);
    // console.log(users);
    // console.log(users[0].fname);
    // console.log(users[0].number);
  } catch (err) {
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    let user = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
      cpassword: req.body.cpassword,
    });
    let result = await user.save();
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    // console.log(email + password);
    let user = await User.findOne({ email: email });
    if (!user) {
      console.log("error");
    } else {
      if (user.email === email && user.password === password) {
        res.sendFile(`${__dirname}/homepage.html`);
      } else {
        res.send("Invalid Detail");
      }
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.delete("/users/:id", async (req, res) => {
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
  console.log(`Server connection successfull at ${PORT}...`);
});
