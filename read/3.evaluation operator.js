use("netflix");

// db.shows.find()

// Evaluation operators
// ? $regex
// db.shows.find(
//     {
//         summary:{
//             $regex:"dome",
//             $options:"i"
//         }
//     }
// )

// db.sales.insertMany([
//     {
//         name:"laptop",
//         volume:20,
//         order:25
//     },
//     {
//         name:"Key board",
//         volume:25,
//         order:15
//     },
//     {
//         name:"Mobile",
//         volume:50,
//         order:60
//     }
// ])

// db.sales.find()
// ?$expr

// db.sales.find({$expr:{$lt:["$order","$volume"]}})
// db.sales.find({order:{$gt:25}})
