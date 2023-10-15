const mongoose= require('mongoose');

exports.connDB=async()=>{
   await mongoose.connect("mongodb+srv://ashishkumal89:passw0rd@cluster0.e2qc8jv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")

   console.log("database is connected");
}