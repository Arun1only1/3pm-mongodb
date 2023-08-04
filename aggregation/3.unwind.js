use("3pm");

// $unwind => array

// db.hobbies.insertOne({
//     name:"Rohan",
//     hobbies:["Cooking","Dancing","Singing"]
// })

// db.hobbies.insertMany([
//     {
//         name:"Anil",
//         hobbies:[]
//     },
//     {
//         name:"Sanyog",
//         hobbies:null
//     }
// ])

// db.hobbies.find()

// db.hobbies.aggregate([
//     {
//         $match:{}
//     },
//     {
//         $unwind:{
//             path:"$hobbies",
//             preserveNullAndEmptyArrays:true,
//             includeArrayIndex:"index"
//         }
//     }
// ])

// db.users.insertOne({
//     name:"Ramila Shrestha",
//     sportData:[
//         {
//             name:"Cricket",
//             frequency:2
//         },
//         {
//             name:"Football",
//             frequency:3
//         },
//         {
//             name:"Basketball",
//             frequency:4
//         }
//     ]
// })

// db.users.aggregate([
//     {
//         $match:{
//             name:"Ramila Shrestha"
//         }
//     },
//     {
//         $unwind:"$sportData"
//     }
// ])
