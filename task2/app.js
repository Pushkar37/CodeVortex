const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entery)=>{
    console.log(entery)
    if(entery.isIntersecting){
         entery.target.classList.add('show')
    }
    else{
      entery.target.classList.remove('show')
    }
  })
})
const hidden=document.querySelectorAll('.hidden');
hidden.forEach((e)=>{
  observer.observe(e);
})

const see=document.querySelector(".resumed");
let a=document.querySelector(".hide")
see.addEventListener("click",(e)=>{
a.classList.toggle("show1");
})

const observer2=new IntersectionObserver(entries=>{
  entries.forEach((entry)=>{
   if(entry.isIntersecting){
    entry.target.classList.add("show2");
   }
   else{
    entry.target.classList.remove("show2");
   }
  })
})
const hidden2=document.querySelectorAll(".hidden2");
hidden2.forEach((el)=>{
  observer2.observe(el);
})

const observer3=new IntersectionObserver(entries=>{
  entries.forEach((entry)=>{
   if(entry.isIntersecting){
    entry.target.classList.add("show3");
   }
   else{
    entry.target.classList.remove("show3");
   }
  })
})
const hidden3=document.querySelectorAll(".hidden3");
hidden3.forEach((el)=>{
  observer3.observe(el);
})

let about=document.querySelector(".btnabout");

about.addEventListener("click",(e)=>{
  scrollTo(0,0);
});
let skills=document.querySelector(".btnskills");
let skils=document.getElementById("skills")
skills.addEventListener("click",(e)=>{
  skils.scrollIntoView();
})
let projects=document.querySelector(".btnproject");
let proj=document.getElementById("project");
projects.addEventListener("click",(e)=>{
  proj.scrollIntoView();
})

let resume=document.querySelector(".btnresume");
let res=document.getElementById("resume");
resume.addEventListener("click",(e)=>{
  res.scrollIntoView();
});
let contact=document.querySelector(".btncontact");
let con=document.getElementById("contact");
contact.addEventListener("click",(e)=>{
  con.scrollIntoView();
})