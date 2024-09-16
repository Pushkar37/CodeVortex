const moongose=require("mongoose");

const User= new moongose.Schema({

    Name:{
        type:String,
        required:true
    },
    Surname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        minLength:4,
        maxLength:8,
    }
});

const userDetail= moongose.model("userDetail",User);

module.exports ={userDetail};