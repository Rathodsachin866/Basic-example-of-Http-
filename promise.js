const { promise } = require("zod");

function calculatingArti(){
    let promise = new Promise(function(resolve){
       resolve("Hii there");
    })
    return promise;
}
function main(){
    calculatingArti().then(function(data){
        console.log(data);
        console.log("hey Nowbark")
    })
}
main();

// async await syntax
console.log("nyye")
function calculatingArti(){
    let promise = new Promise(function(resolve){
       resolve("Hii there");
    })
    return promise;
}
console.log("nyye")
async function main(){
    let data = await calculatingArti();
    console.log(data);
    console.log("Hii puaja")
}
main(); 


let users = [{
   name:'ram',
   kidneys:[{
    healthy:false
   }]
}]

console.log(users[0].kidneys);



 \
