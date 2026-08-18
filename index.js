//console.log("Hello World!");

/*function add(a,b)
{
    return a+b;
}

console.log(add(5,6))

function sqrtAdd(a,b)
{
    return Math.sqrt(a) + Math.sqrt(b) ;
}

const sum=function add(a,b)
{
    return a+b;
}

console.log(sum(5,6))
console.log(sqrtAdd(25,100))

const sum=(a,b)=>{return a+b};

console.log(sum(5,6))*/

//IIFE
/*(()=>{
    console.log("Hey!");
})(); */

/*var a=15
console.log(typeof(a))

if(a<20){
    var a=40
    console.log("(Inside Block) a = "+a)
}

console.log("(Outside Block) a = "+a)*/

/*let a=15
console.log(typeof(a))

if(a<20){
    let a=40
    console.log("(Inside Block) a = "+a)
}

console.log("(Outside Block) a = "+a)*/


/*function sum(a,b){
    return a+b;
}

function msgWithSum(clbk , msg){
    const result=clbk(30,40);
    console.log("Result = "+result+" Message = "+msg);
}

msgWithSum(sum , "Hii")*/

/*function login(error , msg){
    if(error){
        console.log("Error : "+error)
    }
    else{
        console.log("Message : "+msg)
    }
}

function loginHandler(username , password , clbk){
    if(username=="rnk" && password=="1122334455"){
        clbk(null,"Login Success !");
    }
    else{
        clbk("Wrong username or password !" , null)
    }
}

loginHandler("rnk" , "1122334455" , login)*/


console.log("1")
console.log("2")
console.log("3")

console.log("1")
setTimeout(()=>console.log("2"),1000)
console.log("3")

