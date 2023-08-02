use("3pm");

// delete removes whole document,not field
// deleteOne
// deleteMany

// db.persons.deleteOne({"name.first":"victor"})

// db.persons.deleteMany({"name.first":"victor"})
// db.persons.find({"name.first":"victor"})

// db.persons.find({_id:ObjectId("64c62e1e842af30ffa7e85b7")})

// db.persons.deleteOne({_id:ObjectId("64c62e1e842af30ffa7e85b7")})

// delete user whose name is maeva wilson

// db.persons.findOne({"name.first":"maeva","name.last":"wilson"})

// db.persons.deleteOne({"name.first":"maeva","name.last":"wilson"})

// db.persons.find()
