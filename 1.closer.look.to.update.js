use("3pm");

// update
// ?$set
db.persons.find();

// find user with firstName "victor" and
// set his email to "victor@gmail.com"
// db.persons.updateOne({"name.first":"victor"},{
//     $set:{
//         email:"victor@gmail.com"
//     }
// })

// ?find user whose first name is carl and state is "wicklow"
// ?update his email to "carl@gmail.com"
// ?and phone number to 9845123652

// db.persons.updateOne({"name.first":"carl","location.state":"wicklow"},{
//     $set:{
//         email:"carl@gmail.com",
//         phone:"9821562378"
//     }
// })

// db.persons.findOne({"name.first":"carl","location.state":"wicklow"})

// db.scores.insertMany([
//     {
//         name:"Sanjeev",
//         age:23,

//        highestScore:93,
//        location:{
//         temporary:"Ktm",
//         permanent:"Kavre"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:85
//          },  {
//             subject:"Social",
//             obtained:75
//          },  {
//             subject:"Math",
//             obtained:93
//          }
//        ]
//     },
//     {
//         name:"Anit",
//         age:24,

//        highestScore:95,
//        location:{
//         temporary:"Ktm",
//         permanent:"Nepalgunj"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:95
//          },  {
//             subject:"Social",
//             obtained:82
//          },  {
//             subject:"Math",
//             obtained:73
//          }
//        ]
//     },
//     {
//         name:"Dipesh",
//         age:23,

//        highestScore:98,
//        location:{
//         temporary:"Ktm",
//         permanent:"Bhaktapur"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:81
//          },  {
//             subject:"Social",
//             obtained:67
//          },  {
//             subject:"Math",
//             obtained:98
//          }
//        ]
//     }
// ])

// db.scores.find()
// ?update age of "Sanjeev" to 24
// ?and temporary location to "Lalitpur"

// db.scores.updateOne({_id:ObjectId("64c632c19cd34c2e5861b6dd")},
// {
//     $set:{
//         age:24,
//         "location.temporary":"Lalitpur"
//     }
// })

// ?$inc
// db.scores.updateOne({
//     name:"Anit"
// },{
//     $inc:{
//         age:3
//     }
// })

// db.scores.updateMany({},{
//     $inc:{age:2}
// })

// ?increase highest score of "Anit" by 3
// db.scores.updateOne({name:"Anit"},{
//     $inc:{
//         highestScore:3
//     }
// })

// db.scores.updateOne({name:"Anit"},{
//     $inc:{
//         age:-4
//     }
// })

// decrease highest score of every user by 10
// db.scores.updateMany({},{
//     $inc:{
//         highestScore:-10
//     }
// })

// ?$mul
// db.scores.updateOne({
//     name:"Dipesh"
// },{
//     $mul:{
//         age:2
//     }
// })

// ?divide age of dipesh by 2

// db.scores.updateOne({name:"Dipesh"},{
//     $mul:{
//         age:0.5
//     }
// })

// multiply highest score of every user by 2

// db.scores.updateMany({},{
//     $mul:{
//         highestScore:2
//     }
// })

// ?divide highest score by 4

// db.scores.updateMany({},{
//     $mul:{
//         highestScore:0.25
//     }
// })

// ?$set
// ?if there is no specified field, it adds the field
// db.scores.updateMany({},{
//     $set:{
//         isBrilliant:true
//     }
// })

//? $rename => changes field  name

// db.scores.updateMany({},{
//     $rename:{
//         age:"totalAge"
//     }
// })

// ?rename highest score to lowest score
// db.scores.updateMany({},{
//     $rename:{
//         highestScore:"lowestScore"
//     }
// })

// ?find users whose totalAge is greater than or equals to 25
// ?and change field totalAge to age

// db.scores.updateMany({totalAge:{$gte:25}},{
// $rename:{
//     totalAge:"age"
// }
// })

// ?unset => removes field

// db.scores.updateMany({},{
//     $unset:{
//         isBrilliant:""
//     }
// })

db.scores.find();
