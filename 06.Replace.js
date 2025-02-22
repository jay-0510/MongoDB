// The replaceOne() method replaces an entire document with a new one, keeping only the _id field unchanged.
// updateOne(), which modifies specific fields, replaceOne() replaces the entire document.

db.users.insertOne({
  _id: ObjectId("507f191e810c19729de860ea"),
  name: "John Doe",
  age: 29,
  city: "New York",
});

// Replacing the document completely
db.users.replaceOne(
  { _id: ObjectId("507f191e810c19729de860ea") },
  { name: "John Smith", age: 30, country: "USA" }
);

// The new document now becomes:
// {
//   "_id": ObjectId("507f191e810c19729de860ea"),
//   "name": "John Smith",
//   "age": 30,
//   "country": "USA"
// }

// The _id field remains unchanged.
