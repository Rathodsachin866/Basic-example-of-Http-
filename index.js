
// const express = require("express");

// const app = express();

// const users =[{
//     name : "john",
//     kidneys:[{
//         healthy:false,
//     }]
// }]

// app.use(express.json());

// app.get("/", function(req, res){
//     const johnkidneys = users[0].kidneys;
//     const numberOfKidneys= johnkidneys.length;
//     let numberOfHealthyKidneys =0;

//     for (let i = 0; i<johnkidneys.length; i++){
//         if(johnkidneys[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys +1;
//         }
//     }

//     const numberOfUnHealthyKidneys = numberOfKidneys- numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnHealthyKidneys,

//     })
//  })

const express = require("express")
const zod = require("zod");
const app = express();

  const shecma = zod.string().min(8) 
  const respone = zod.shecma
 app.post("/", function(req,res){ 

    const isHealthy = req.body.isHealthy;
    
    users[0].kidneys.push({
          healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
  })
  
 app.put("/", function(req,res){
    for( let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy= true;
    }
    res.json({
        msg :'done'
    })
 })
 app.use(function (err,req,res, next ){
    res.status(404).json({
        msg:"Browser have did not support"
    })
    return next();
 })
 app.listen(3000);

//  app.delete("/", function (req,res){
//     if(isThereAtLtleastOnUnhealthyKindey()){
//     const newKidneys = [];
//     for(let i = 0; i<users[0].kidneys.length; i++){
//         if(!users[0].kidneys[i].healthy){
//             newKidneys.push({
//                 healthy:true
//             })        
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//         msg:"done"  
//     })
// }else{
//     res.status(411).json({
//         msg:"you have no bad kidney"
//     })
// }
//  })

//  function isThereAtLtleastOnUnhealthyKindey(){
//     let atleastUnhealthyKidney = false;
//     for(let i =1; i<users[0].kidneys.length; i++){
//         if(!users[0].kidneys[i].healthy){
//             atleastUnhealthyKidney=true;
//         }
//     return atleastUnhealthyKidney
//     }
//  }

// let input = [ 1,2,3,4,5];

// let anotheerArrayForPush = [];

// for(let i = 1; i < input.length; i++){

//         anotheerArrayForPush.push([i] *3);
      
//     }
//     console.log(anotheerArrayForPush);


// let input = [ 1,2,3,4,5];


// function transform(i){
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans)


// let input = [ 1,2,3,4,5];

// const ans = input.map(function(i){
//     return i *2;
// })
// console.log(ans)


// filter
// let input = [ 1,2,3,4,5];

// let ans = input.filter(function(n){
//     for(let i=0; i<input.length; i++){
//         if(n % 2 ==0){
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }
// })

// console.log(ans);