//const MongoClient=require("mongodb").MongoClient;

var {MongoClient,ObjectID}=require("mongodb");

var id=new ObjectID();
console.log(id);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDb server");
    /*db.collection("Todos").insertOne(
    {
    text:'Something to do',
    completed:false

    },
    (err,result)=>{
        if(err)
        {
            return console.log("Unable to insert into Todo")
        }

        console.log(JSON.stringify(result.ops,null,2));

    })
    */
   /*
   db.collection("Users").insertOne(
    {
       
        name:'Gaurav Dixit',
        age:27,
        location:'Delhi'


   },(err,result)=>{
if(err)
{
    return console.log("Unable to insert into the Users collection",err);
}


console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),null,2));
   });
   */

    db.close();

});