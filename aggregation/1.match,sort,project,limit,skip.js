use("3pm");

// Aggregation

// find persons whose gender is male
// db.persons.find({gender:"male"})

// aggregation => complex query
// => only read operation
// => consists of  pipeline stage
// => example of stages are
// $match,$lookup,$unwind,$group,$skip,$limit,$project,$sort

// db.persons.aggregate([
//     {
//         $match:{gender:"female"}
//     },

//     {
//         $project:{
//             gender:1,
//             email:1,
//             fullName:{$concat:["$name.first"," ","$name.last"]},

//             currentAge:"$dob.age"
//         }
//     },
//     {
//         $sort:{
//            currentAge:1
//         }
//     },
//     {
//         $skip:0
//     },
//     {
//         $limit:3
//     }

// ])

db.persons.find();

// ?find users who are male and age is greater than 30
// ?project name, age,email,gender,state,phone
// ?sort result by age

db.persons.aggregate([
  {
    $match: { $and: [{ gender: "male" }, { "dob.age": { $gt: 30 } }] },
  },
  {
    $project: {
      fullName: { $concat: ["$name.first", " ", "$name.last"] },

      email: 1,
      gender: 1,
      age: "$dob.age",
      state: "$location.state",
      phone: 1,
    },
  },
  {
    $sort: {
      age: 1,
    },
  },
  {
    $skip: 40,
  },
  {
    $limit: 20,
  },
]);
