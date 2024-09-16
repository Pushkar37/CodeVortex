const moongose=require("mongoose");

const applicationSchema=new moongose.Schema({

    reason:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    forjob:{
        type:String
    },
    applicant:{
        type:String,
      
    }

})
const application=moongose.model("application",applicationSchema);

module.exports={application};