
var {MongoClient,ObjectID}=require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
return console.log("Unable to connect to MongoDB server");
    }
    db.collection("Users").find({name:'Gaurav Dixit'}).toArray().then((docs)=>
    {

    console.log(JSON.stringify(docs,null,2)); 
    },(err)=>
    {
        console.log("Error fetching documents");

    })

    console.log("Connected to MongoDb server");

    db.close();

});