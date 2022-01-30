const express=require("express");

const app=express();

require("./conn");
app.use(express.json());
app.use(require('./auth/auth'));

app.get('/',(req,res)=>{
   res.send("hello word");
});

app.listen(3000,()=>{
    console.log("server started");
});

