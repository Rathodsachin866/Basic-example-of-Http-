// // 
// const jwt = require("jsonwebtoken");

// const value = {
//     name: "sachhuu",
//     password: 24565466,
// };
// // sign is use for generate web token
// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FjaGh1dSIsInBhc3N3b3JkIjoyNDU2NTQ2NiwiaWF0IjoxNzIxOTcwMTQwfQ.F7dht3cT_VJ9ZUxXxnQtt3eEXc_M8Bi2oj9mc4kx2ok", "secret");
// console.log(token);
// //this token has gennerated using this "secret",and this token can only be verified suing this "secret"
// //

// // 

// const jwt = require("jsonwebtoken");

// const value = {
//     name: "sachhuu",
//     password: 24565466,
// };
// // sign is use for generate web token
// const token = jwt.sign(value, "secret");
// console.log(token);
// // //this token has gennerated using this "secret",and this token can only be verified suing this "secret"
// // //

// try {
//     let a;
//     console.log(a);
//     console.log("hii thre from insode try")
// }catch(e){
//     console.log("hii thre from insode catch")
// }

// const jwt = require("jsonwebtoken");
// const jwtPassword = "secret";
// const zod = require("zod");

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);

// function signJwt(username ,password){
//     const usernameResonce = emailSchema.safeParse(username);
//     const passwordResonce = passwordSchema.safeParse(password);
//     if(!usernameResonce.success || passwordResonce.success){
//         return null;
//     }

//     const signature = jwt.sign({
//         username
//     },jwtPassword)

//     return signature;

// }

// function verifyJwt (token){
//     let ans = ture;

//     try{
//         jwt.verify(token, jwtPassword);
//     } catch(e){
//         ans = false;
//     }
//     return ans;
// }

// function decodejwt(token){
//     const decoded = jwt.decode(token);

//     if(decoded){
//         return true;

//     }
//     else{
//         return false;
//     }
// }
// const ans = signJwt("sr5631080@gamil.com", "11");
// console.log(ans);


