// const express = require("express");

// const app = express();

// app.get("/health-checkup", function(req,res){
//     // do health check frist here
//     const kidneyId = req.query.kidneyId;
//     const username = req.header.username;
//     const password = req.header.password;

//     if(username != "harkirat" && password != "pass"){
//         res.status(403).json({
//             msg: "User doesnt exist",
//         });
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg:"wrong inputs",
//         });
//         return;
//     }

// })




// const express = require("express");

// const app = express();

// app.get("/health-checkup", function(req,res){
//     // do health check frist here
   
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "harkirat" || password != "pass"){
//      res.status(400).json({"msg" : " something up with your inputs"})
//       return
//     }
//      if(kidneyId != 1 && kidneyId !=2){      
//     res.status(400).json({"msg" : " something up with your inputs"})
//      return
              
//     }
    
//     res.json({
//         msg:"Your kidney is fine!"
//     })
//     });

//     app.listen(3000);


// const express = require("express");

// const app = express();

// app.get("/health-checkup", function(req,res,next){
//     console.log("Hii from req1");
//     next();

// }
// ,function (req,res,next){
//    confirm.log("Hi from req2");
//    next();
// },function (req,res){
//     confirm.log("Hi from req3");
   
//  });
//  app.listen(3000);


// const express = require("express");

// const app = express();
// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     const kidneys= req.body.kidneys; //"kidney":[1,2,34]
//     const kidneyLength = kidneys.length;

//     res.send("you have "+ kidneyLength + "kidneys");

// });

// app.use(function(err,req,res,next){
//     res.json({
//         msg:"Sorry something is up with our server"
//     })
// })

// app.listen(3000);


//-----------------------------------------------------------

// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// {
//     email: string=>email
//     password: atleast 8 letter;
//     country:"ind","usa"
// }

// const schema = zod.object({
//     email:zod.string(),
//     password: z.string(),
//     country:z.literal("ind").or(z.literal("usa")),
//     kidney:z.array(z.number())
// })
// app.use(express.json());

// app.post ("/health-checkup", function(req,res ){
//     const kidney = req.body.kidney;
//     const response = schema.safeParse(kidney)
//     if(!response.success){
//         res.status(411).json({
//             msg:"input is invalid"
//         })
//     }else{
//         res.send({
//             response
//         })
//     }
//     res.send({
//         response
//     })
// });

// app.listen(3000);
//-----------------------------------------



//if this is an array of number with atleast 1 input , return true , else return false
// const express = require("express");
// const zod = require("zod");
// const app = express();

// function validateInput(obj){
//     const schema = zod.object({
//         email: zod.string().email(),
//         password:zod.string().min(8),
//     })

//     const response = schema.safeParse(obj);
//     console.log(response);
// }



// app.post("/login" , function(req,res){
//     const response = validateInput(req.body)
//     if(!response.success){
//         res.json({
//             msg:" your input is incorrect"
//         })
//     }
// })
// app.listen(3000);


const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  "mongodb+srv://sr5631080:7wnSQRnK0I8eJCwZ@cluster1073.azowif1.mongodb.net/userappnew",
);

const User = mongoose.model("User", {
  name: String,
  address: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(400).send("User already exists");

  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save().then(() => {
    console.log("user saved");
  });
});

app.listen(3000);


// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://sr5631080:7wnSQRnK0I8eJCwZ@cluster1073.azowif1.mongodb.net/userappnew");

// const User = mongoose.model('User',{name:String ,address:String,email:String,password:String});

// const user =new User ({name:"Mansi kalyani",email:"ejeyd@example.com",password:"Mansi@123",passion:"design and modeling"});

// user.save().then(()=>{
//   console.log("user saved");
// })