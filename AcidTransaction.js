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
