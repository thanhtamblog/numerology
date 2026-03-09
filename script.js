function reduce(num){

while(num > 9 && num !== 11 && num !== 22 && num !== 33){

num = num.toString().split('').reduce((a,b)=>a+parseInt(b),0)

}

return num

}


function lifePath(date){

let nums = date.replaceAll("-","").split("").map(Number)

let sum = nums.reduce((a,b)=>a+b,0)

return reduce(sum)

}


function birthday(date){

let day = parseInt(date.split("-")[2])

return reduce(day)

}


function attitude(date){

let parts = date.split("-")

let sum = parseInt(parts[1]) + parseInt(parts[2])

return reduce(sum)

}


function maturity(life,expression){

return reduce(life + expression)

}


const letterMap = {
A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
}


function expression(name){

name = name.toUpperCase().replace(/[^A-Z]/g,'')

let sum = 0

for(let c of name){

sum += letterMap[c]

}

return reduce(sum)

}


function soul(name){

name = name.toUpperCase()

let vowels = "AEIOU"

let sum = 0

for(let c of name){

if(vowels.includes(c)){

sum += letterMap[c]

}

}

return reduce(sum)

}


function calculate(){

let name = document.getElementById("name").value

let birth = document.getElementById("birth").value

let life = lifePath(birth)

let exp = expression(name)

let s = soul(name)

let b = birthday(birth)

let a = attitude(birth)

let m = maturity(life,exp)

document.getElementById("life").innerText = life
document.getElementById("soul").innerText = s
document.getElementById("expression").innerText = exp
document.getElementById("birthday").innerText = b
document.getElementById("attitude").innerText = a
document.getElementById("maturity").innerText = m

}
