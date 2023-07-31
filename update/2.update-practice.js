use("3pm");

db.scores.find();

// db.scores.insertOne({
//     "name": "Santosh",
//     "location": {
//       "temporary": "Bhaktpaur",
//       "permanent": "Lalitpur"
//     },
//     "scores": [
//       {
//         "subject": "Science",
//         "obtained": 72
//       },
//       {
//         "subject": "Social",
//         "obtained": 65
//       },
//       {
//         "subject": "Math",
//         "obtained": 81
//       }
//     ],
//     "lowestScore": 41.5,
//     "age": 24
// })

// db.scores.updateMany({},{
//     $rename:{
//         totalAge:"age"
//     }
// })

// ?1.update lowestScore of Dipesh to 51,
// ?temporary location to "Biratnagar"

// db.scores.updateOne({name:"Dipesh"},{
//     $set:{
//         lowestScore:51,
//         "location.temporary":"Biratnagar"
//     }
// })
// ?2.increase age of Dipesh by 2
// ?3.decrease lowestScore of Dipesh by 9
// db.scores.updateOne({name:"Dipesh"},{
//     $inc:{
//         age:2,
//         lowestScore:-9
//     }
// })
// ?4. divide age of Anit by 2
// db.scores.updateOne({
//     name:"Anit"
// },{
//     $mul:{
//         age:1/2
//     }
// })
// ?5.multiply age of Sanjeev by 1.5
// db.scores.updateOne({name:"Sanjeev"},{
//     $mul:{
//         age:1.5
//     }
// })
// ?6.Change name of Santosh to Sandip
// db.scores.updateMany({name:"Santosh"},{
//     $set:{
//         name:"Sandip"
//     }
// })
db.scores.find();
