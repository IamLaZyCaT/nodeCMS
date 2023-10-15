const mongoose = require('mongoose');

const blogSchema=mongoose.Schema({
    title:{
        type:String
    },
    subTitle:{
        type:String
    },
    description:{
        type:String
    }
},{
    timestamps:true
})

const Blog= mongoose.model("Blog",blogSchema);
//ALternative
// module.exports(mongoose.model("Blog",BlogSchema));

module.exports=Blog;

