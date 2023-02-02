const { application } = require('express');
const express= require ('express');
const mongoose= require('mongoose');
const PORT= 8888;
const app=express();

//database connection
mongoose.connect('mongodb://localhost:27017/myneodb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('error', (err)=> {throw err});
db.once('open',()=> { console.log("Database connected")})

//end connection

app.listen(PORT,(err)=>{
    if (err) throw err;
    else console.log(`Work on ${PORT}`)
})