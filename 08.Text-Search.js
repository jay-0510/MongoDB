// Text Search -
// MongoDB provides full-text search using a text index.
// Text search supports multiple languages and tokenizes text using word delimiters.
// It supports searching for words, phrases, and case-insensitive searches.

db.articles.createIndex({ content: "text" });

db.articles.find({ $text: { $search: "MongoDB tutorial" } });
// output: { "_id": 1, "content": "This is a MongoDB tutorial." }
