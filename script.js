// rút gọn số theo thần số học
function reduce(num){

while(num > 9 && num !== 11 && num !== 22 && num !== 33){

num = num.toString().split('').reduce((a,b)=>a+Number(b),0)

}

return num

}


// LIFE PATH
function lifePath(date){

let nums = date.replaceAll("-","").split("").map(Number)

let sum = nums.reduce((a,b)=>a+b,0)

return reduce(sum)

}


// BIRTHDAY NUMBER
function birthday(date){

let day = parseInt(date.split("-")[2])

return reduce(day)

}


// ATTITUDE NUMBER
function attitude(date){

let parts = date.split("-")

let sum = Number(parts[1]) + Number(parts[2])

return reduce(sum)

}


// MATURITY NUMBER
function maturity(life,expression){

return reduce(life + expression)

}


// CHUYỂN CHỮ → SỐ
const letterMap = {
A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
}


// chuẩn hóa tên (bỏ dấu tiếng Việt)
function normalizeName(name){

return name
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.toUpperCase()

}


// EXPRESSION NUMBER
function expression(name){

name = normalizeName(name).replace(/[^A-Z]/g,'')

let sum = 0

for(let c of name){

if(letterMap[c]){

sum += letterMap[c]

}

}

return reduce(sum)

}


// SOUL URGE
function soul(name){

name = normalizeName(name)

let vowels = "AEIOU"

let sum = 0

for(let c of name){

if(vowels.includes(c) && letterMap[c]){

sum += letterMap[c]

}

}

return reduce(sum)

}

function pinnacleNumbers(date){

let parts = date.split("-")

let month = reduce(Number(parts[1]))
let day = reduce(Number(parts[2]))
let year = reduce(parts[0].split("").reduce((a,b)=>a+Number(b),0))

let p1 = reduce(month + day)
let p2 = reduce(day + year)
let p3 = reduce(p1 + p2)
let p4 = reduce(month + year)

return [p1,p2,p3,p4]

}

function challengeNumbers(date){

let parts = date.split("-")

let month = reduce(Number(parts[1]))
let day = reduce(Number(parts[2]))
let year = reduce(parts[0].split("").reduce((a,b)=>a+Number(b),0))

let c1 = Math.abs(month-day)
let c2 = Math.abs(day-year)
let c3 = Math.abs(c1-c2)
let c4 = Math.abs(month-year)

return [c1,c2,c3,c4]

}
// MAIN FUNCTION
function calculate(){

let name = document.getElementById("name").value.trim()

let birth = document.getElementById("birth").value

if(!name || !birth){

alert("Vui lòng nhập đầy đủ họ tên và ngày sinh")

return

}

let life = lifePath(birth)

let exp = expression(name)

let s = soul(name)

let b = birthday(birth)

let a = attitude(birth)

let m = maturity(life,exp)

  let py = personalYear(birth)
  
document.getElementById("life").innerText = life
document.getElementById("soul").innerText = s
document.getElementById("expression").innerText = exp
document.getElementById("birthday").innerText = b
document.getElementById("attitude").innerText = a
document.getElementById("maturity").innerText = m
document.getElementById("personalYear").innerText = py
document.getElementById("personalYear").innerText = py
}
