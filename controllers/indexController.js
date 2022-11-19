const fs = require("fs");

const getindex = (req, res) => {
  user = fs.readFileSync("data/user", { encoding: "utf-8" });
  user = JSON.parse(String( user));


  usr = [];
 
  for (let key in user) {
    usr.push(user[key]);
  }
 
  
  var file = 'data/squeak'
  const sender= req.body.sender;
  const receiver = req.body.receiver;
  const message = req.body.message;
  var obj = { Sender: sender, Receiver: receiver,Message: message }
  //console.log(sender)
  //console.log(receiver)
  //console.log(message)
  fs.readFile(file, (err, data) => {
    if (err && err.code === "ENOENT") {
       
        return fs.writeFile(file, JSON.stringify([obj]), error => console.error);
    }
    else if (err) {
      
        console.error(err);
    }    
   
    else {
        try {
            const fileData = JSON.parse(data);

           
            fileData.push(obj);

            return fs.writeFile(file, JSON.stringify(fileData,null,2), error => console.error)
        } catch(exception) {
            console.error(exception);
        }
    }
});


  res.render("index", {user:usr});
};



module.exports = { getindex:getindex };
