Collection.insertOne(); // inserts a single document into a collection.

db.inventory.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" },
});

Collection.Insertmany(); // inserts multiple documents into a collection.

db.inventory.insertMany([
  {
    item: "canvas",
    qty: 100,
    tags: ["Copper"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas",
    qty: 100,
    tags: ["Zinc"],
    size: { h: 18, w: 38.05, uom: "cm" },
  },
  {
    item: "canvas",
    qty: 100,
    tags: ["Aluminium"],
    size: { h: 8, w: 37, uom: "cm" },
  },
]);
