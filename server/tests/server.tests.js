const expect=require('expect');
const request=require('supertest');
const app=require("../server");
var Todo=require('../models/todo');
//require("../models/todo");

console.log("Todo coming is "+Todo);
beforeEach((done)=>{
    Todo.remove({}).then(()=>{
done();
    });

});
describe('POST /todos',()=>{

    it('shoulf create a new todo',(done)=>{
        var text='Text todo text';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);

        }).end((err,res)=>{

            if(err)
            {
return done(err);
            }

            Todo.find().then((todos)=>{
                expect(todos).length.toBe(1);
                expect(todos[0].text).length.toBe(text);
                done();


            },(err)=>{
                done(err);
            }).catch((e)=>{
                done(e);
            });
        })

    })
});