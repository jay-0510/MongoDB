// MongoDB supports geospatial queries using 2D Sphere indexes.
// Geospatial queries allow you to find documents based on their location.
// Useful for location-based services (e.g., finding nearby stores).

db.places.createIndex({ location: "2dsphere" });

db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
      $maxDistance: 5000,
    },
  },
});
// output: { "_id": 1, "name": "Store A", "location": { "type": "Point", "coordinates": [ 77.5946, 12.9716 ] } }
//         { "_id": 2, "name": "Store B", "location": { "type": "Point", "coordinates": [ 77.5946, 12.9716 ] } }
