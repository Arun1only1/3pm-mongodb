use("3pm");

// db.owner.insertOne({
//     name:"Rabina Gurung",
//     age:25,
//     location:"Surry Hills, Sydney",
//     gender:"female"
// })

// db.owner.find()

// db.car.insertOne({
//     model:"e6",
//     brand:"BYD",
//     year:2021,
//     type:"electric",
//     ownerId:ObjectId("64cf6b95460f5b4f1e8b5157")
// })

// db.car.insertOne({
//         model:"Y",
//     brand:"Tesla",
//     year:2018,
//     type:"electric",
//     ownerId:ObjectId("64cf6b95460f5b4f1e8b5157")
// })

// db.car.find()

// db.car.aggregate([
//     {
//         $match:{}
//     },
//     {
//         $lookup:{
//             from:"owner",
//             localField:"ownerId",
//             foreignField:"_id",
//             as:"ownerData"
//         }
//     },
//     {
//         $project:{
//             model:1,
//             brand:1,
//             ownerName:{$first:"$ownerData.name"}
//         }
//     }
// ])

// db.owner.aggregate([
//     {
//         $match:{}
//     },
//     {
//        $lookup: {
//         from:"car",
//         localField:"_id",
//         foreignField:"ownerId",
//         as:"carData"
//        }
//     },
//     {
//         $project:{
//             name:1,

//             "carData.brand":1,
//             "carData.model":1,
//             numberOfCars:{$size:"$carData"},

//         }
//     },
//     {
//         $unwind:"$carData"
//     },
//     {$project:{
//         name:1,
//         numberOfCars:1,
//         brandModel:{$concat:["$carData.brand","-","$carData.model"]}
//     }},

//     {$group:{
//         _id:"$_id",
//         name:{$first:"$name"},
//         brandModelList:{$push:"$brandModel"}
//     }}
// ])
