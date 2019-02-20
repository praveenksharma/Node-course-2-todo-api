var {MongoClient,ObjectID}=require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
return console.log("Unable to connect to MongoDB server");
    }
    db.collection("Users").findOneAndUpdate({_id:new ObjectID("5c6ce234b1a38165ffa33f35")},
    {
        $set:{
            name:"Payal Jain"
        },
        $inc:{
                age:1
        }
    },
    {
        returnOriginal:false
    }
    ).then((result)=>{

        console.log(result);

    })
 

    console.log("Connected to MongoDb server");

    db.close();

});