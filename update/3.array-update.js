use("3pm");

// ?update array

// $ operator => matching object
// db.scores.updateOne({
//     name:"Sanjeev",
//     "scores.subject":"Science"
//     },
//     {
//         $set:{
//             "scores.$.subject":"Commerce"
//         }

// })

// ?change Social to Data-science of Anit

// db.scores.updateOne({
//     name:"Anit",
//     "scores.subject":"Social"
// },{
//     $set:{
//         "scores.$.subject":"Data-science"
//     }
// })

// ?increase Sandip's Social marks by 15
// db.scores.updateOne({
//     name:"Sandip",
//     "scores.subject":"Social"
// },{
//     $inc:{
//         "scores.$.obtained":15
//     }
// })

// db.scores.updateOne({
//     name:"Sandip"
// },{
//     $set:{
//         "scores.$[].obtained":79
//     }
// })

// ?increase obtained marks of every subject by 5
// ? of Sandip
// db.scores.updateOne({name:"Sandip"},{
//     $inc:{
//         "scores.$[].obtained":5
//     }
// })

// db.scores.updateOne({name:"Dipesh"},{
//     $set:{
//         "scores.$[item].obtained":70
//     }
// },{
//     arrayFilters:[{"item.obtained":{$gt:80}}]
// })

// db.students.insertMany([
//     { "name":"Bishal", "grades" : [ 85, 80, 80 ] },
//     { "name":"Milan", "grades" : [ 88, 90, 92 ] },
//     { "name":"Ayush", "grades" : [ 85, 100, 90 ] }
//  ])

// db.students.updateOne({
//     name:"Bishal",
//     grades:85
// },{
//     $set:{
//         "grades.$":95
//     }
// })

// db.students.updateOne({name:"Milan"},
// {
//     $inc:{
//         "grades.$[]":-8
//     }
// })

db.students.updateOne(
  {
    name: "Ayush",
  },
  {
    $set: {
      "grades.$[item]": 70,
    },
  },
  {
    arrayFilters: [{ item: { $gte: 90 } }],
  }
);
db.students.find();
