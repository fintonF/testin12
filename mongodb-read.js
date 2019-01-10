const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
if (err){
    return console.log('unable to conn to db');
}
db.collection('information').find({
_id: new ObjectID('5c36ea31ca1bde2da0eee5d5')
    // text:"something to do"
}).toArray().then((docs)=>{
    console.log('information');
    console.log(JSON.stringify(docs,undefined,2));
},(err) => {
    console.log('unable to fetch todos',err);
});

db.collection('information').find().count().then((count)=>{
    console.log('information count:',count);
},(err) => {
    console.log('unable to fetch todos',err);
});

// console.log('connected to mongo server');
db.close();
});
// });