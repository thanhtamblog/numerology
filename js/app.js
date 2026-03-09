async function runTool(){

let name=document.getElementById("name").value
let birth=document.getElementById("birth").value

let life=lifePath(birth)

let soul=soulNumber(name)

let exp=expressionNumber(name)

let year=personalYear(birth)

let chart=pythagorasChart(birth)

let data=await loadNumber(life)

document.getElementById("result").innerHTML=

`

<h2>Số chủ đạo: ${life}</h2>

<p>${data.summary}</p>

<h3>Số linh hồn: ${soul}</h3>

<h3>Số biểu đạt: ${exp}</h3>

<h3>Năm cá nhân: ${year}</h3>

`

}