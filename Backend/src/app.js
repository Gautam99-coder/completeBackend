const express=require("express");
const connectDB= require("./db/db")
const postModel=require("./models/post.model")
const uploadfile=require("./services/storage.services")
const multer=require("multer");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

const upload=multer({storage:multer.memoryStorage()})
connectDB();

app.post("/create-post",upload.single("image"), async (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);

    const result=await uploadfile(req.file.buffer);
    console.log(result);

    const post= await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })
    return res.status(201).json({
        message:"post created Successfully"
    })
})


app.get("/posts",async (req,res)=>{
    const posts= await postModel.find();

    return res.status(200).json({
        message:"post fetched Successfully!",
        posts:posts
    })
})

module.exports =app;