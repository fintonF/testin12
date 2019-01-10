const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
if (err){
    return console.log('unable to conn to db');
}
console.log('connected to mongo server');

// db.collection('Todos').deleteMany({
//     text:'something to do '
// }).then((result)=>{
//     console.log(result);
// });


//-----------------------


// db.collection('Todos').deleteOne({text:'something to do'}).then((result)=>{
//     console.log(result);
// });

//-----------------------

db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    console.log(result);
});
db.close();
});