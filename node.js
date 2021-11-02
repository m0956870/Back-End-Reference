// const name = require('name');
// module.exports = name;

// const { add, sub, mult, div } = require("./file");
// module.exports = { add, sub, mult, div };

// run node on powershell to activate node terminal
// type node index.js in powershell to run index file

// let name = "Manish";
// console.log(name);

// File System
const fs = require("fs");

// Synchronous
// Create file
// fs.writeFileSync("read.txt", "hello "); // to create
// fs.writeFileSync("read.txt", "Hello"); // to update

// fs.appendFileSync("read.txt", " World!"); // to append something

// Read File
// let bufferData = fs.readFileSync("read.txt");
// console.log(bufferData); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
// let readabledata = bufferData.toString();
// console.log(readabledata);

// Rename file
// fs.renameSync("read.txt", "demo.txt");

// fs.mkdirSync("demo.txt");
// fs.unlinkSync('express')

// Asynchoronous ( Callback function is must || error)

// fs.mkdir("express", (err) => {
//   console.log("folder created.");
// });

// fs.writeFile("read.txt", "hello world!", () => {
//   console.log("Async file is created");
// });

// fs.appendFile("read.txt", " How are you?", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Text is appended");
//   }
// });

// fs.readFile("read.txt", "utf8", (err, data) => {
//   console.log(data);
// }); // 'utf8' for non buffer data

// fs.writeFile("ignore.txt", "ignore", (err) => {
//   console.log(created);
// });

// fs.unlink("ignore.txt", (err) => {
//   console.log("file deleted");
// });
// fs.rmdir("express", (err) => {
//   console.log("folder deleted");
// });

// Operating System
const os = require("os");

// console.log(os.arch()); // for xbit (ia32)
// console.log(os.freemem() / 1024 / 1024 / 1024); //  free memory in bites
// console.log(os.totalmem() / 1024 / 1024 / 1024); //  total memory in bites
// console.log(os.hostname());
// console.log(os.platform()); // window/linux/mac
// console.log(os.type());

// Path
const path = require("path");

// console.log(path.dirname("C:/Manish/NodeJs/index.js")); // C:/Manish/NodeJs
// console.log(path.extname("C:/Manish/NodeJs/index.js")); // .js
// console.log(path.basename("C:/Manish/NodeJs/index.js")); // index.js

// console.log(path.parse("C:/Manish/NodeJs/index.js"));
// // {
// //     root: 'C:/',
// //     dir: 'C:/Manish/NodeJs',
// //     base: 'index.js',
// //     ext: '.js',
// //     name: 'index'
// // }

// let details = path.parse("C:/Manish/NodeJs/index.js");
// console.log(details.name);

// HTTP Server
const http = require("http");
// const PORT = process.env.PORT || 5000;

// let server = http.createServer((req, res) => {
//   // console.log(req.url);
//   // const data = fs.readFileSync(`${__dirname}/user.json`, 'utf8') // for loading data at starting

//   if (req.url == "/" || req.url == "/home") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("Home page");
//     res.end();
//   } else if (req.url == "/about") {
//     res.end("About page");
//   } else if (req.url == "/contact") {
//     res.end("Contact page");
//   } else if (req.url == "/userapi") {
//     fs.readFile(`${__dirname}/user.json`, "utf8", (err, data) => {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(data);
//     });
//   } else if (req.url == "/dataapi") {
//     fs.readFile(`${__dirname}/data.json`, "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "content-type": "application/json" });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404);
//     res.end("404 Not Found");
//   }
// }); // .listen

// server.listen(PORT, "127.0.0.1", (err) => {
//   console.log(`Server is established at ${PORT}`);
// });

// let objData = {
//   name: "Manish",
//   age: "23",
//   hobby: "travel",
// };
// console.log(objData);

// let jsonData = JSON.stringify(objData); // to convert Object in JSON
// console.log(jsonData);

// let ObjData = JSON.parse(jsonData); // to convert JSON in Object
// console.log(ObjData);
// console.log(ObjData.name);

// to add json data first convert object into json (JSON.stringify) then pass the variable
// fs.writeFile("data.json", jsonData, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Json file created.");
//   }
// });

// fs.readFile("data.json", "utf8", (err, data) => {
//   console.log(data);
//   //  console.log(JSON.parse(data));
// });
