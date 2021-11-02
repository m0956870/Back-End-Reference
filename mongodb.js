// 1. mongod // to create server
// 2. mongo // to start work on db

// show dbs // to show all the available data bases
// use demo // to create or use database (access demo as db)

// database.collectionName.operation(Create, Read, Update & Delete)
// db.first.insertOne({ name: "HTML" }) // first is collection name inside demo as db

//check again
// show dbs
// db to check database
// show collections  // demo > first as db.first
// db.first.find()
// db.first.find().pretty()

// to exit ^C or quit()

//CRUD Operation

// CREATE Data field:Value inside collections
// db.first.insertOne({ name: "HTML" }) // first is collection name inside demo as db
// db.collectionName.insertMany([ {}, {}, {} ])

// READ
// db.first.find( {field:value}, { feild:1 || field:0 } ) // if 1 will show only & if 0 then show rest field
// db.first.find( {field:value}, { _id:0 || name:1 } ) // will hide id & show name only
// db.first.find( {field:value} ).limit(1) // will show only first match result
// db.first.findOne( {field:value} )
// db.first.find( {field:value} ).skip(1) // will skip 1st matched result

//UPDATE
// db.collection.updateOne( {feild:Value}, {$set: { feild:Value} })
// db.collection.updateMany( {feild:Value}, {$set: { feild:Value} })
// db.collection.replaceOne()

//DELETE
// db.collection.deleteOne( {feild:value})
// db.collection.deleteMany()

// db.collection.deleteOne( {} ) // if you want to delete all bhe collections
// db.dropDatabase() // to delete database

// MONGOOSE
const mongoose = require("mongoose");

// (mdata) Database name
// mongoose
//   .connect("mongodb://localhost:27017/mdata", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connection successfull..."))
//   .catch((err) => console.log(err));

// const schema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Modelc = new mongoose.model("mcollection", schema); // mcollection collection name
const Model1 = new mongoose.model("mc1", schema); // mc1 collection name
// const Model2 = new mongoose.model("mc2", schema); // mc1 collection name

// const demodata = new Model({
//   name: "Manish",
//   age: 23,
// });

// demodata.save();

// Mor Secure Way
const createData = async () => {
  try {
    // let manish = new Model({
    //   name: "Manish",
    //   age: 23,
    // });

    // let sanjeev = new Model1({
    //   name: "Sanjeev",
    //   age: 26,
    // });

    // let deepak = new Model1({
    //   name: "Deepak",
    //   age: 29,
    // });

    let result = await Model1.insertMany([sanjeev, deepak]);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createData();

// [
//   { _id: 60fbf8c1f974a00a44d5c5f4, name: 'Manish', age: 23, __v: 0 },
//   { _id: 60fbfbb40870bc0138460470, name: 'Sanjeev', age: 26, __v: 0 },
//   { _id: 60fbfbb50870bc0138460471, name: 'Deepak', age: 29, __v: 0 }
// ]

const readData = async () => {
  try {
    let result = await Model1.find();
    // console.log(result);

    // let result = await Model1.find({ name: "Sanjeev" });
    // console.log(result);

    // let result = await Model1.find({ name: "Deepak" })
    //   .select({
    //     _id: 0,
    //     name: 1,
    //   })
    //   .limit(1);

    // let result = await Model1.find({ age: { $gte: 26 } }); // >=
    // let result = await Model1.find({ age: { $lte: 26 } }); // =<
    // let result = await Model1.find({ $or: [{ name: "Manish" }, { age: 26 }] }); // ||
    // let result = await Model1.find({ $and: [{ name: "Manish" }, { age: 23 }] }); // &&
    // let result = await Model1.find({ age: { $gte: 23 } }).countDocuments(); // 3
    // let result = await Model1.find().countDocuments();
    // let result = await Model1.find().sort({ name: 1 }) // -1 for reverse
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// readData();

const updateData = async (id) => {
  // let result = await Model1.updateOne({filter}, {$set: {newValue}});
  try {
    let updateData = await Model1.updateOne(
      { _id: id },
      { $set: { age: 23 } },
      { new: true }
    );
    let result = await Model1.findOne({ _id: id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// updateData("60fbf8c1f974a00a44d5c5f4");

const deleteDocument = async (_id) => {
  try {
    let deleteData = await Model1.deleteOne({ _id });
    let result = await Model1.find();
    console.log(deleteData);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument("60fc098e30cc3d17f0ec59b1");
