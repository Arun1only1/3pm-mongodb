// use this database=> group of table(collection)
use("friendData");

// TODO:BSON=>Binary Object Notation

// db.friendInfo.find()

// ?CRUD

//? C =>Create

// ?insertOne
// db.friendInfo.insertOne({
//     name:"Rajeev",
//     location:"Ktm",
//     educationLevel:"Bachelor"
// })

// ?insertMany

// db.friendInfo.insertMany([
//     {
//         name:"Salon",
//         location:"Ktm",
//         educationLevel:"Plus2"
//     },
//     {
//         name:"Samriddhi",
//         location:"Ktm",
//         educationLevel:"3"
//     }
// ])

//? R =>READ/RETRIEVE
// ? find
// =>findMany => find
// db.friendInfo.find()

// ?findOne
// db.friendInfo.findOne({name:"Salon"})
// db.friendInfo.find({location:"Ktm"})

// ?D=>Delete/Remove

// ?deleteOne
// db.friendInfo.deleteOne({
//     name:"Salon"
// })

// ?deleteMany
// db.friendInfo.deleteMany({
//     location:"Ktm"
// })

// ?U =>Update/Edit
// ? updateOne
// db.friendInfo.updateOne({name:"Salon"},
// {
//     $set:{location:"Bhaktapur"}
// }
// )

// db.friendInfo.updateOne({name:"Sanjeev"},{
//     $set:{name:"Salon"}
// })

// ? updateMany

// db.friendInfo.updateMany({name:"Salon"},{
//     $set:{
//         educationLevel:"Masters"
//     }
// })
// db.friendInfo.find()
