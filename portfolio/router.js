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
    var email=req.body.email;
    var f={username: username,email:email};
    // Form.create(f,function(err,newlyCreatedForm){
    //     if(err)
    //     {
    //         console.log(err);
    //     }else{
    //         res.redirect("/result");
    //         console.log(f);
    //     }
    // });

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
    res.render("cv", { name: username,email:email,educations:edus,experience:exp});
});

module.exports = router;