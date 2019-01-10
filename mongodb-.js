// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// var user={
//     name:'xyz',
//     age:26
// };
// var {name}=user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{

if (err){
    return console.log('unable to conn to db');
}
console.log('connected to mongo server');
// db.collection('information').insertOne({
//     name:'akku',
//     age:42,
//     studid:4415,
//     completed: false
// },(err,result)=>{
//     if (err){
//         return console.log('unablr to insert todo',err);
//     }
    // console.log(JSON.stringify(result.ops,undefined,2));
// });
db.close();

});