// ACID TRANSCATIONS --
// Atomicity, Consistency, Isolation, Durability
// ACID - A group of database operations that must happen all or nothing.

// Atomicity: All or nothing. If one operation fails, all operations fail.
// Consistency: Data is always in a consistent state.
// Isolation: Operations do not interfere with each other.
// Durability: Data is saved and will not be lost.

// MongoDB 4.0 supports multi-document transactions on replica sets.
// MongoDB 4.2 supports multi-document transactions on sharded clusters.

commitTransaction(); // Commits a multi-document transaction.
abortTransaction(); // Aborts a multi-document transaction.
startSession(); // Starts a new session.

//Multi-document transactions allow operations on multiple documents to either commit or rollback together.
// Transactions are used when multiple operations must be executed as a single unit.

const session = db.getMongo().startSession();
session.startTransaction();
try {
  session
    .getDatabase("testDB")
    .users.updateOne(
      { name: "Alice" },
      { $inc: { balance: -100 } },
      { session: session }
    );
  session
    .getDatabase("testDB")
    .users.updateOne(
      { name: "Bob" },
      { $inc: { balance: 100 } },
      { session: session }
    );
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
}
session.endSession();
