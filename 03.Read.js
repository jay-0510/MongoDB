db.inventory.find({ item: "canvas" }); //find all documents in the inventory collection.
// Fetch all documents/ queries

// Equality condition
db.inventory.find({ qty: 100 }); // find all documents--  where the qty field is equal to 100.
db.inventory.find({ qty: { $eq: 100 } }); // find all documents where the qty field is equal to 100.

// AND condition
db.inventory.find({ status: "A", qty: { $lt: 30 } }); // find all documents where the status equals "A" and qty is less than 30.

// OR condition
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] }); // find all documents where status equals "A" or qty is less than 30.

// AND as well as OR condition
db.inventory.find({
  status: "A",
  $or: [{ qty: { $lt: 30 } }, { item: /^p/ }],
});

db.iventory, findOne(); // returns one document that satisfies the specified query criteria on the collection or view.
db.inventory.findOne({ status: "D" }); // find one document where the status field equals "D".
