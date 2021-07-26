#!/usr/bin/node
const crypto = require('crypto')
let pass = ""
let char = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#"
,"$","%","&","*","(",")",",","/"]
let len = Number(process.argv[2]) === Number(process.argv[2])? process.argv[2]: crypto.randomInt(11, 21)

const isLetter = (str) => {
if (str.length === 1 && str.match(/[a-z]/)){return true}
}

for (let i=0; i < len; i++) {
   let up = crypto.randomInt(0,2)
   let next = char[crypto.randomInt(0, char.length)]
   if (up && isLetter(next)){ 
   pass += next.toUpperCase()
   }
   else {
   pass += next
   }
}

if(Number(process.argv[2]) != len) console.log(`As no number was provided, the password was generated with ${len} characters`)
else
if(len<11) {
console.log("Passwords with less than 11 characters are weak and easily broken. It is recommended to provide more or equal than 11")
}

console.log(pass)

