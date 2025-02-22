// Upsert ( Update or Insert ) a document in the collection

//Upsert (updateOne() or updateMany() with { upsert: true }) creates a new document if no matching document is found.
// This avoids unnecessary queries to check if the document exists before inserting.

db.users.updateOne(
  { name: "Charlie" },
  { $set: { age: 35 } },
  { upsert: true }
);
// output: { "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0, "upsertedId" : ObjectId("5f1d8c7b7c8d3e0e4c3b6c5e") }
