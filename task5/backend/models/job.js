const moongose=require("mongoose");

const jobPosted=new moongose.Schema({

    titile:{type:String,
            required:true
    },
    description:{
        type:String,
        required:true
    },
    lastdate:{
        type:String
    },
    salary:{
        type:String,
        required:true
    },
    user:{
       type:String,
    
       required:true
    }
});
const job=moongose.model("job",jobPosted);

module.exports={job};