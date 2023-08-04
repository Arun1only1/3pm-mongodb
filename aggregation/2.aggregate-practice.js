use("3pm");

db.persons.find();

// ? find persons who are male and
// ?are above 30
// ? and project fullName,gender,age,email,city,username
// ?sort by age in descending order

db.persons.aggregate([
  {
    $match: {
      gender: "male",
      "dob.age": { $gt: 30 },
    },
  },
  {
    $project: {
      fullName: { $concat: ["$name.first", " ", "$name.last"] },
      gender: 1,
      age: "$dob.age",

      email: 1,

      city: "$location.city",
      userName: "$login.username",
    },
  },
  {
    $sort: {
      age: -1,
    },
  },
]);
