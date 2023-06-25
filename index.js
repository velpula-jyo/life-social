const express=require("express");
const cors =require('cors');
const app=express();

const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const mongoose=require("mongoose");
const mongodb=require("mongodb");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts");

dotenv.config();
mongoose.connect("mongodb://127.0.0.1:27017",()=>
{
    console.log("Mongo_db is connected!!!");
});

//mongoose.connect(
    //process.env.MONGO_URL,
    //{useNewUrParser: true,useUnifiedTopology: true,useCreateIndex:true},
  //  ()=>
//{
    //console.log("Mongo_db is connected!!!");});

//middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.get("/",(req,res)=>
{
    res.send("Welcome to HomePage!!!");
});

app.get("/users",(req,res)=>
{
    res.send("Welcome to users page!!!");
});

app.listen(8648,()=>
{
    console.log("Backend end server is running!!!");
});