// TTL indexes automatically delete documents after a specified time, useful for expiring data.

db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
// The above command creates a TTL index on the createdAt field of the sessions collection.

// Use case : Removing old session data or logs automatically.
