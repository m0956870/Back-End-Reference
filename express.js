const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const path = require("path");

// For Static Website
app.use(express.static(path.join(__dirname, "/public")));

// const hbs = require("hbs");
// // Set Template Engine (hbs)
// app.set("view engine", "hbs");
// // To change views directory
// app.set("views", `${__dirname}/template/views`);
// // Register partials
// hbs.registerPartials(`${__dirname}/template/partials`);
// // nodemon express -e js,hbs // to run hbs extension in node server

// Template Engine Route
// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("*", (req, res) => {
//   res.render("error", {
//     code: "404",
//   });
// });

app.get("/", (req, res) => {
  res.status(200).send("First express server....");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
  // res.status(200).send("About page");
});

app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "public/service.html"));
  // res.status(200).send("Service page");
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/contact.html`));
  // res.status(200).send("Contact us page");

  // console.log(req.query.name);
  // console.log(`${req.query.name}, ${req.query.age}, ${req.query.hobby}`);
  // res.end(`${req.query.name}, ${req.query.age}, ${req.query.hobby}`);
});

app.get("/api", (req, res) => {
  res.sendFile(`${__dirname}/user.json`);
  // res.status(200).json([
  //   { id: "1", name: "Manish", age: 23 },
  //   { id: "2", name: "Sanjeev", age: 26 },
  //   { id: "3", name: "Deepak", age: 29 },
  // ]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/error.html"));
  // res.status(404).send("<h1>404-Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server established at Port no ${PORT}`);
});
