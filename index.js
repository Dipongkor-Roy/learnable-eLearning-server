const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 9000;
app.use(cors());

const courses=require('./Data/courses.json')
app.get('/',(req,res)=>{
    res.send('Welcome To Lernable Server');
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.listen(port,()=>{
    console.log(`Running on , ${port}`)
})