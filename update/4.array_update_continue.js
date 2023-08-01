use("3pm");

// more on array update
// push values on array =>$push, $addToSet
// remove values from array =>$pop, $pull
// upsert

// ?$push =>adds item to last index of array
// db.students.updateOne({
//     name:"Bishal"
// },
// {
//     $push:{
//         grades:95
//     }
// })

// ?add 91 to Milan's grades

// db.students.updateOne({
//     name:"Milan"
// },
// {
//     $push:{
//         grades:91
//     }
// })

// ? adding multiple values to array

//! it adds whole array at the last index of grades
// db.students.updateOne({
//     name:"Milan"
// },{
//     $push:{grades:[71,81]}
// })

// db.students.updateOne({
//     name:"Milan",
// },{
//     $push:{
//         grades:{$each:[71,81]}
//     }
// })

// ?add 55,61,92,85,70 to Ayush's grades
// db.students.updateOne({
//     name:"Ayush",
// },{
//     $push:{
//         grades:{$each:[55,61,92,85,70]}
//     }
// })

// ?$addToSet
// db.students.updateOne({
//     name:"Ayush"
// },{
//     $addToSet:{
//         grades:{
//             $each:[71,92,86,88,55,61,52]
//     }
//     }
// })

// db.students.updateOne({
//     name:"Bishal"
// },
// {
//     $push:{
//         grades:{
//                 $each:[],
//                 $sort:-1,
//                 $slice:3

//         }
//     }
// })

// ?remove items from array
// ? $pop
//? value 1 removes item from last index
// ? value -1 removes item from first index

// db.students.updateOne({name:"Bishal"},{
//     $pop:{
//         grades:-1
//     }
// })

// ?remove last item from grades of Milan
// db.students.updateOne({name:"Milan"},{
//     $pop:{
//         grades:1
//     }
// })

// ?remove first item from grades of Ayus
// db.students.updateOne({name:"Ayush"},{
//     $pop:{
//         grades:-1
//     }
// })

// ?$pull => removes items from array
// ?based upon "condition"

// db.students.updateOne({
//     name:"Ayush"
// },
// {
//     $pull:{
//         grades:{$gt:65}
//     }
// })

// ?remove grades from Milan which are
// ?less than or equals to 85

// db.students.updateOne({
//     name:"Milan"
// },
// {
//     $pull:{
//         grades:{
//             $lte:85
//         }
//     }
// })

// ? add 85,75,65,35 to grades of Milan
// db.students.updateOne({
//     name:"Milan"
// },
// {
//     $push:{
//         grades:{
//             $each:[85,75,65,35,91,75]
//         }
//     }
// })

//? $pullAll

// db.students.updateOne({
//     name:"Milan"
// },
// {$pullAll:{
//     grades:[91,65]
// }})

db.students.find();
