
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword ="1234567";

const app = express();

app.use(express.json());
const ALL_USERS =[  {
    username:"sachin@1073@gmail.com",
    password:"123",
    name:"sachin",
  },
  {
    username:"vaishu@1073@gmail.com",
    password:"12354",
    name:"vaishu",
  },
  {
    username:"mansin@1073@gmail.com",
    password:"12394344",
    name:"mansi",
  },
];
function userExits(username, password){
  let userExits = false;
  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      userExits = true;
      
    }
  }
  return userExits;
}
app.post("/signin", function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  if(!userExits(username,password)){
    return res.status(403).json({
      msg:" user does not exist",
    });
  }
  var token = jwt.sign({username:username}, jwtPassword);
  return res.json({
    token,
  });
});
app.get("/users", function(req,res){
  const token = req.headers.authorization;
 const decoded = jwt.verify(token,jwtPassword);
 const username = decoded.username;

     res.json({
      users:ALL_USERS.filter(function(value){
        if(value.username == username){
            return  false
        }else{
            return true;
        }
      })
    });
  
});
app.listen(3000);
//7wnSQRnK0I8eJCwZ