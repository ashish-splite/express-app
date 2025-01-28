
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) { });

db['collection'].query();
