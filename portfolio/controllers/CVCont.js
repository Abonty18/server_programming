const fs=require("fs");
const getCV=(req,res)=>
{
     educations=fs.readFileSync("data/education",{encoding:"utf-8"});
     educations=JSON.parse(String(educations));

     experience=fs.readFileSync("data/experience",{encoding:"utf-8"});
     experience=JSON.parse(String(experience));

     {edus=[];
     for(let key in educations)
     {
          edus.push(educations[key]);
     }

     

     exp=[];
     for(let key in experience)
     {
          exp.push(experience[key]);
     }}

     res.render("cv",{name:"Labiba Farah",educations:edus,experience:exp});


};
module.exports={getCV:getCV};