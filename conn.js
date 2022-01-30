const mongoose=require("mongoose");

const dotenv=require("dotenv");

dotenv.config({path: './config.env'});
const db=process.env.DB;

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("connected");
}).catch((err)=>console.log("failed"));