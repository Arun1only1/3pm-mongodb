use("netflix");

// ?project
// ?sort
// ?skip
// ?limit

// db.shows.find({name:"Under the Dome"},{name:1,genres:1,status:1,_id:0})

// db.shows.find({},{name:1, rating:1})

// db.shows.find({},{name:1}).skip(3).limit(2)

// ?find movies whose average rating is greater than 7

// db.shows.find({"rating.average":{$gt:7}},{name:1,rating:1}).sort({
//     "rating.average":-1
// })

// => pagination 1,2,3

// ?find shows whose runtime is less than 100
//? and sort the result by name in descending order
// ?project name, runtime and status
// db.shows.find({runtime:{$lt:100}},{name:1,runtime:1,status:1}).sort({
//     name:-1
// })
