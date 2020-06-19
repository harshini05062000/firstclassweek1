/*var a=10;
var b=30;
function sum(a,b,callBack) {
    console.log(a+b);
}
sum(a,b,function(a,b) {
   return a+b;
});*/


var str=require("readline-sync");
let str1=str.question("enter username: ");
let str2=str.question("enter password: ");
function credentials(str1,str2,callBack) {
    if(callBack(str1,str2)) {
       console.log("valid");
    }
    else {
        console.log("invalid");
    }
}
credentials(str1,str2,function(str1,str2) {
    if (str1=="harshi"  && str2=="harshini") {
        return true;
    }
    else {
        return false;
    }
});