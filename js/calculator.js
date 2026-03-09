function reduceNumber(num){

while(num > 9 && num != 11 && num != 22){

num = num.toString()
.split('')
.reduce((a,b)=>a+parseInt(b),0)

}

return num

}

function lifePath(date){

let digits=date.replaceAll("-","")

let sum=digits.split('')
.reduce((a,b)=>a+parseInt(b),0)

return reduceNumber(sum)

}

function soulNumber(name){

const vowels="aeiouy"

let sum=0

for(let c of name.toLowerCase()){

if(vowels.includes(c)){

sum+=c.charCodeAt(0)-96

}

}

return reduceNumber(sum)

}

function expressionNumber(name){

let sum=0

for(let c of name.toLowerCase()){

if(c.match(/[a-z]/)){

sum+=c.charCodeAt(0)-96

}

}

return reduceNumber(sum)

}