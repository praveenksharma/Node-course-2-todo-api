var {MongoClient,ObjectID}=require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
return console.log("Unable to connect to MongoDB server");
    }
    /*
db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);

})
*/
db.collection("Users").findOneAndDelete({_id:new ObjectID('5c6b8a6fb1a38165ffa33a27')} ).then((result)=>{
    console.log(result);

})

    console.log("Connected to MongoDb server");

    db.close();

});