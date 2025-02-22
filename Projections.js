// Projections are used to return only selected fields in a query, improving performance by reducing the amount of data retrieved.

// _id is always returned unless explicitly excluded.

db.users.find({ name: "John Doe" }, { age: 1, _id: 0 });
// output: { "age": 29 }
