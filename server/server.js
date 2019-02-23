
var {mongoose}=require("./db/mongoose");
var express=require("express");
var bodyParser=require('body-parser');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>
{
var todo=new Todo({
   text:req.body.text
});

todo.save().then(
(doc)=>
{
    res.status(200).send(doc);
console.log(JSON.stringify(doc,null,2))
},
(err)=>
{ res.status(400).send(err);
    console.log('Some error occured',JSON.stringify(err,null,2))
}
)

});

app.listen(3000,()=>{
    console.log("Application started on 3000");
})


