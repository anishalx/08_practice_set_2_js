// q1?
/*
let age = prompt("Tell me what is your age ?")
age =Number.parseInt(age)
if (age >10 && age <20){
  console.log("your age is correct")
}
else{
  console.log("your age is not valid for this work")
}

*/
//q2
/*
let age = prompt("Tell me what is your age ?")
switch(age){
  case '11':
    console.log("your age is 11")
    break
  case '13':
    console.log("your age is 13")
    break
  case '15':
    console.log("your age is 15")
    break
  case '17':
    console.log("your age is 17")
    break
  case '19':
    console.log("your age is 19")
    break
  default:
    console.log("your age is  not matching")
}
*/
//q3
/*
let num =prompt("write a number which is divisible by 2 and 3 ")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0)
{
  console.log("you number is right")
  
} 
else{
console.log("oops! you number is incorrect")
  
}
*/

//q4
/*
let num =prompt("write a number which is divisible by 2 and 3 ")
num = Number.parseInt(num)
if (num%2 == 0 || num%3 == 0)
{
  console.log("you number is right")
  
} 
else{
console.log("oops! you number is incorrect")
  
}
*/
//q5
let age = prompt("Tell me what is your age ?")
age =Number.parseInt(age)
// let age = 18
let a = age  >= 18? "you can drink" :"you cannot drink"
  console.log(a)