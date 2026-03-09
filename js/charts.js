function pythagorasChart(date){

let digits=date.replaceAll("-","")

let chart={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

for(let d of digits){

if(chart[d] !== undefined){

chart[d]++

}

}

return chart

}