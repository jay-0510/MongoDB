// Bulk operations allow multiple operations (insert, update, delete) to be performed in a single request, improving performance.

// 1. Ordered Bulk Operations: Executed sequentially; stops on the first error.
// 2. Executed in parallel; does not stop on errors.

var bulk = db.users.initializeUnorderedBulkOp();
bulk.insert({ name: "Alice", age: 25 });
bulk.insert({ name: "Bob", age: 30 });
bulk.find({ name: "Alice" }).updateOne({ $set: { age: 26 } });
bulk.find({ name: "Bob" }).deleteOne();
bulk.execute();
