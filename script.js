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

pitagoChart(birth)

let chart = createPitagoChart(birth);

renderPitago(chart);

showMissingNumbers(chart);

detectArrows(chart);
}
function pitagoChart(date){

let nums = date.replaceAll("-","").split("")

let count = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}

for(let n of nums){

if(count[n] !== undefined){

count[n] += n

}

}

for(let i=1;i<=9;i++){

document.getElementById("p"+i).innerText = count[i]

}

}
function personalYear(date){

let parts = date.split("-")

let month = Number(parts[1])
let day = Number(parts[2])

let year = new Date().getFullYear()

let sum = month + day + year.toString().split("").reduce((a,b)=>a+Number(b),0)

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

function createPitagoChart(birthdate){

let digits = birthdate.replaceAll("-","").split("");

let count = {
1:0,2:0,3:0,
4:0,5:0,6:0,
7:0,8:0,9:0
};

digits.forEach(d=>{
if(count[d] !== undefined){
count[d]++;
}
});

return count;
}

function renderPitago(chart){

let layout = [1,4,7,2,5,8,3,6,9];

let html = `<div class="pitago-grid">`;

layout.forEach(num=>{

let value = chart[num] > 0 ? String(num).repeat(chart[num]) : "";

let className = chart[num] > 0 ? "pitago-filled" : "pitago-empty";

html += `<div class="pitago-cell ${className}">${value}</div>`;

});

html += `</div>`;

document.getElementById("pitagoChart").innerHTML = html;
}

function showMissingNumbers(chart){

let missing = [];

for(let i=1;i<=9;i++){
if(chart[i] == 0){
missing.push(i);
}
}

let text = missing.length ? missing.join(", ") : "Không có";

document.getElementById("missingNumbers").innerHTML =
"<b>Số thiếu:</b> " + text;

}

function detectArrows(chart){

let arrows = [];

if(chart[1] && chart[2] && chart[3]){
arrows.push("Mũi tên Kế hoạch (1-2-3)");
}

if(chart[4] && chart[5] && chart[6]){
arrows.push("Mũi tên Ý chí (4-5-6)");
}

if(chart[7] && chart[8] && chart[9]){
arrows.push("Mũi tên Hoạt động (7-8-9)");
}

if(chart[1] && chart[4] && chart[7]){
arrows.push("Mũi tên Thực tế (1-4-7)");
}

if(chart[2] && chart[5] && chart[8]){
arrows.push("Mũi tên Cân bằng cảm xúc (2-5-8)");
}

if(chart[3] && chart[6] && chart[9]){
arrows.push("Mũi tên Trí tuệ (3-6-9)");
}

document.getElementById("pitagoArrows").innerHTML =
"<b>Mũi tên Pitago:</b><br>" + (arrows.join("<br>") || "Không có");

}

