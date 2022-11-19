const fs = require("fs");

const getSqueak = (req, res) => {
  squeak = fs.readFileSync("data/squeak", { encoding: "utf-8" });
  squeak = JSON.parse(String( squeak));
  user = fs.readFileSync("data/user", { encoding: "utf-8" });
  user = JSON.parse(String( user));


  usr = [];
  sqk = [];
 
  for (let key in user) {
    usr.push(user[key]);
  }


 
 
  for (let key in squeak) {
    sqk.push(squeak[key]);
  }
 
  
  const receiver = req.body.receiver;


  res.render("Squeaks", {squeaks:sqk,user:usr,receiver:receiver});
};



module.exports = { getSqueak:getSqueak };
