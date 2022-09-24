const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CVCont.js");

const fs = require("fs");

router.get("/", getCV);

router.get("/form", (req,res) => {
    res.render('form');
});

router.post("/form",function(req,res){
    var username=req.body.username;
    var useremail=req.body.useremail;
    var f={username: username, useremail:useremail};


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

    console.log(f);
    res.render("cv", {username: username, useremail:useremail, educations:edus,experience:exp});
});

module.exports = router;