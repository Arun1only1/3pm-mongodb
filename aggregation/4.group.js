use("3pm");

// $group=> statistics => gather information from data

db.persons.aggregate([
  {
    $match: {},
  },
  {
    $group: {
      _id: "$gender",
      totalPerson: { $count: {} },
      averageAge: { $avg: "$dob.age" },
      minimumAge: { $min: "$dob.age" },
      maximumAge: { $max: "$dob.age" },
    },
  },
]);
// db.persons.find()
