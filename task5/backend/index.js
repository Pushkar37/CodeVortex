const express=require("express");
const app=express();
const moongose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override")
const {userDetail}=require("./models/user.js");
const { error } = require("console");
const {job}=require("./models/job.js");
const {application}=require("./models/apply.js");
const nodemailer=require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");
const { resolve } = require("path/win32");
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
async function main(){

    moongose.connect("mongodb://127.0.0.1:27017/board");
};
main().then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log(err);
})

const port=8080;

app.listen(port,()=>{

    console.log("connection established");
})

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/aboutus",(req,res)=>{
    res.render("aboutus.ejs");
})
app.get("/home/signup",(req,res)=>{
   res.render("register.ejs");
})
app.put("/home/register",(req,res)=>{
 let {password,confirmpassword,name,surname,email}=req.body;
 
 userDetail.find({Email:email}).then((exists)=>{
   if(exists[0]!=""){
    console.log(exists)
       res.send("user already exists");
      
}
else{
 if(password==confirmpassword){
    let user= new userDetail({

        Name:name,
        Surname:surname,
        Email:email,
        Password:password

    });
   

    user.save()
    .then((rese)=>{
       console.log("User Registered Succesfully");
       console.log(rese);
       res.redirect("/home/login");
    })
    .catch((err)=>{
        console.log(err);
        res.render("err.ejs")
    })
          
    }else{
        res.render("passerr.ejs");
    }
}
 }) }
)
app.get("/home/login",(req,res)=>{
res.render("login.ejs");
})

app.put("/home/login", async function(req,res){
    let{email,password}=req.body;
    let user=  await userDetail.find({Email:email});
    console.log("working");
   
    userDetail.find({Email:email}).then((exists)=>{
        if(exists){
            console.log(user)
           
          if(password==user[0].Password){
           res.redirect(`/home/login/${email}/after`);
           
          }else{
             res.render("login.ejs")
          }
        }
        else{
            res.send("No Such User Exists")
            setTimeout(()=>{
              res.redirect("/home/signup")
            },1000)
        }
    })
})
app.get("/home/login/:email/after",async(req,res)=>{
    
    let {email} =req.params ;
    
    let user = await userDetail.find({Email:email});
    
    res.render("loginhome.ejs",{user});}
)

app.post("/home/login/:email/search",async(req,res)=>{
    let jobs=await job.find({});
    let {email} =req.params ;
    let user = await userDetail.find({Email:email});
    let search=JSON.stringify(req.body.search);
     search = search.replace(/"/g, '');
    
    
    jobs= jobs.filter(job=>job.titile == search.toString().toLowerCase())
  
    res.render("aftersearch.ejs",{user,jobs});
})
app.get("/home/login/:email/list",(req,res)=>{
    let {email}=req.params;


    res.render("listjob.ejs",{email})
})
app.patch("/home/login/:email/list",(req,res)=>{

    let{titile,description,salary,lastdate,email}=req.body;
    let newjob=new job({
    titile:titile,
    description:description,
    salary:salary,
    lastdate:lastdate,
    user:email
    });
   
    newjob.save().then((res)=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
    res.redirect(`/home/login/${email}/after`)
})
app.get("/home/login/:email/list/:id",async(req,res)=>{
    let {id,email}=req.params
    let jobdesc= await job.findOne({_id:id});
    let checked=await application.find({applicant:email,forjob:id});
   let check;
   console.log(checked)
    if(checked!=""){
       
       check=true;
    }else{
        check=false
    }
    console.log(check)
    res.render("specific.ejs",{jobdesc,email,check});
})
app.get("/home/login/:email/list/:id/apply",async(req,res)=>{
    let {email,id}=req.params;
    res.render("apply.ejs",{email,id})
})
app.put("/home/login/:email/list/:id/apply",async(req,res)=>{
let{whyshould,previousexperience,link}=req.body;
let{id,email}=req.params;
let newapplication=new application({
    reason:whyshould,
    exp:previousexperience,
    link:link,
    forjob:id,
    applicant:email

})
newapplication.save().then((res)=>{
    console.log(res)
    res.redirect(`/home/login/${email}/after`);;
}).catch(err=>{
    console.log(err);
    res.redirect(`/home/login/${email}/list/${id}/apply`)
})

})
app.get("/home/login/:email/after/dashboard", async(req,res)=>{
    let {email}=req.params;
    let user=await userDetail.find({Email:email});
    let jobs=await job.find({});
    let applied=await application.find({applicant:email});
    let jobsappl=jobs.filter((job)=>{
        applied.forEach((apply)=>apply.forjob==job._id)
        return job;
    })
    
    let jobpost=await job.find({user:email})
    res.render("dashboard.ejs",{user,jobsappl,applied,jobpost});
})
app.get("/home/login/:email/after/dashboard/list/:id",async(req,res)=>{
let {email,id}=req.params;
let count=await application.countDocuments({forjob:id});
let user=await userDetail.find({Email:email});
let appl=await application.find({forjob:id});
let jobdetail=await job.find({_id:id});
console.log(jobdetail)
res.render("listed.ejs",{count,user,appl,jobdetail})
})
app.get("/home/login/:email/after/dashboard/list/:id/:appid",async(req,res)=>{
    let {email,id,appid}=req.params
    let applicantdetails=await userDetail.find({Email:appid});
    let applications=await application.find({forjob:id});
    let jobs=await job.find({_id:id})
    let applicationdetails= applications.filter((app)=>{
        app.applicant==appid;
        return app;
    })
    res.render("application.ejs",{applicantdetails,applicationdetails,jobs})
     

})


app.post("/sentmail/:appid",async(req,res)=>{
let {appid}=req.params;
let id=`${appid}`
await sendEmail(id);





});
const transporter = nodemailer.createTransport({
    service:"gmail",
    port:587,
    auth:{
    user:"job.board35@gmail.com",
    pass:"gvmb sngh yoye yxkq"
    },
    tls:{
        rejectUnauthorized:false
    }
    });
    async function  sendEmail(id){
        const transporter2 = nodemailer.createTransport({
            host:"smtp.gmail.com",
           service:"gmail",
           secure:true,
            port: 465,
            debug: true,
            auth: {
                user:"job.board35@gmail.com",
             pass:"gvmb sngh yoye yxkq"
            },
            tls:{
                rejectUnauthorized:false
            }
          });
          try{
            const mailOptions={
                from:"job.board35@gmail.com",
                to:id,
                subject:"You are shortlisted",
                text:"you are shortlisted for the role you applied "
                }
                
        await transporter2.sendMail(mailOptions)
        }
        catch(err){
        console.log(err);
        }

    }
