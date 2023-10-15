const { connDB } = require('./Database/database');

const Blog  = require("./Model/blogModel");
const express = require('express');
const app=express();

//node js bata aako lae parse gareko
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting database
connDB();


app.get("/",(req,res)=>{
    console.log("this is the home page");
    res.json({
        status:200,
        message: "this is the home page"
    })
})


//Inserting and creating blog API
app.post("/blogs",async(req,res)=>{

//Inserting in db
await Blog.create({
    title:req.body.title,
    subTitle:req.body.subTitle,
    description:req.body.description
})
 
//creating
    res.json({
        status:200,
        message:"the blog is created"
    })

})


//get api for all blogs
app.get("/blogs",async(req,res)=>{

const blogs=await Blog.find()

    res.json({
        status:200,
        message:"this is for getting blogs",
        data:blogs
    })
})


//getting single api for blog
app.get("/blogs/:id",async(req,res)=>{

const id = req.params.id
const isBlogFound = Blog.find({
    id:id
})
if (isBlogFound.length==0){
    res.json({
        status:200,
        message:"Blog is not Found"
    })
}
else{
    const blog=await Blog.find({
        _id:id
     })
 
     res.json({
         status:200,
         message:"single blog",
         data:blog
     })
}
    //getting single
   
})


//editing and updating the data by id
app.patch("/blogs/:id",async(req,res)=>{

const id =req.params.id
const title=req.body.title
const subTitle=req.body.subTitle
const description=req.body.description

const isBlogFound = Blog.find({
    id:id
})

if(isBlogFound.length==0){
    res.json({
        message:"Blog not Found"
    })
}
else{
    await Blog.findByIdAndUpdate(id,{

        title:title,
        subTitle:subTitle,
        description:description
    })
    
    
        res.json({
            status:200,
            message:"the selected id is updated"
        })
}


})


//to delete the blog
app.delete("/blogs/:id",(req,res)=>{

const id = req.params.id

const isBlogFound = Blog.find({
    id:id
})

if(isBlogFound.length==0){
    res.json({
        message:"Blog not Found"
    })
}
else{
    Blog.findByIdAndDelete(id)

    res.json({
        status:200,
        message:"the selected id blog has been deleted"
    })
}
})


app.listen(2500,(req,res)=>{
    console.log("this is 2500 port ")
})

