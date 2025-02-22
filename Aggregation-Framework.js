// Aggregation framework processes and transforms data using multiple pipeline stages such as $match, $group, $sort, $lookup, and $project.

// $match: Filters documents.
// $group: Groups documents by a specified key.
// $sort: Orders documents.
// $lookup: Performs a left outer join to another collection in the same database.
// $project: Reshapes documents.

db.users.aggregate([
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } },
]);
// output: { "_id": "New York", "averageAge": 30 }
//         { "_id": "San Francisco", "averageAge": 32 }
//         { "_id": "Los Angeles", "averageAge": 28 }

// The aggregation framework is used to process and transform data in MongoDB.
