// Building the database -- Data
db.inventory.insertMany([
  {
    item: "journal",
    qty: 25,
    tags: ["blank", "red"],
    size: { h: 14, w: 21, uom: "cm" },
  },
  {
    item: "mat",
    qty: 85,
    tags: ["gray"],
    size: { h: 27.9, w: 35.5, uom: "cm" },
  },
  {
    item: "mousepad",
    qty: 25,
    tags: ["gel", "blue"],
    size: { h: 19, w: 22.85, uom: "cm" },
  },
]);

// Sorting the documents
db.inventory.find().sort({ qty: 1 }); // sort the qty field in ascending order.
db.inventory.find().sort({ qty: -1 }); // sort the qty field in descending order.

db.inventory.find().skip(2); // skip the first two documents.

db.inventory.find().limit(2); // limit the result to only return 2 documents.
