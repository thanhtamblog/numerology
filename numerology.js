function reduce(num){

while(num > 9 && num !== 11 && num !== 22){

num = num.toString().split('').reduce((a,b)=>a+Number(b),0)

}

return num
}


function lifePath(birth){

let digits = birth.replaceAll("-","")

let sum = digits.split('').reduce((a,b)=>a+Number(b),0)

return reduce(sum)

}


function birthday(birth){

return reduce(Number(birth.split("-")[2]))

}


function attitude(birth){

let parts = birth.split("-")

let sum = Number(parts[1]) + Number(parts[2])

return reduce(sum)

}


function expression(name){

let map={
a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,
j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,
s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8
}

let sum=0

name=name.toLowerCase().replace(/[^a-z]/g,'')

for(let c of name){

sum+=map[c] || 0

}

return reduce(sum)

}


function soul(name){

let vowels="aeiouy"

let map={
a:1,e:5,i:9,o:6,u:3,y:7
}

let sum=0

name=name.toLowerCase()

for(let c of name){

if(vowels.includes(c)){

sum+=map[c] || 0

}

}

return reduce(sum)

}


function maturity(life,exp){

return reduce(life+exp)

}


function calculate(){

let name=document.getElementById("name").value

let birth=document.getElementById("birth").value

if(!name || !birth){

alert("Vui lòng nhập đầy đủ thông tin")

return

}

let life=lifePath(birth)

let exp=expression(name)

let s=soul(name)

let b=birthday(birth)

let a=attitude(birth)

let m=maturity(life,exp)

document.getElementById("life").innerText=life
document.getElementById("soul").innerText=s
document.getElementById("expression").innerText=exp
document.getElementById("birthday").innerText=b
document.getElementById("attitude").innerText=a
document.getElementById("maturity").innerText=m

let chart=createPitagoChart(birth)

renderPitago(chart)

showMissingNumbers(chart)

}



function createPitagoChart(birth){

let digits=birth.replaceAll("-","").split("")

let count={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

digits.forEach(d=>{

if(count[d]!==undefined){

count[d]++

}

})

return count

}


function renderPitago(chart){

let layout=[1,4,7,2,5,8,3,6,9]

let html='<div class="pitago-grid">'

layout.forEach(num=>{

let value=chart[num] ? String(num).repeat(chart[num]) : ""

html+=`<div class="pitago-cell">${value}</div>`

})

html+='</div>'

document.getElementById("pitagoChart").innerHTML=html

}


function showMissingNumbers(chart){

let missing=[]

for(let i=1;i<=9;i++){

if(chart[i]===0){

missing.push(i)

}

}

document.getElementById("missingNumbers").innerHTML=

"Số thiếu: " + (missing.join(", ") || "Không có")

}
