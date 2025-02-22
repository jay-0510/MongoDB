// MongoDB supports real-time data monitoring using change streams.
// Change streams allow you to listen to changes in the database and react to them in real-time.
// Useful for building real-time applications and event-driven architectures. e.g., updating a dashboard in real-time).

const changeStream = db.users.watch();
changeStream.on("change", (change) => {
  console.log(change);
});
// output: { _id: { _data: '825F...' }, operationType: 'insert', fullDocument: { _id: 1, name: 'Alice' } }
