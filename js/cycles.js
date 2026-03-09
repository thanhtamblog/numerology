function personalYear(date){

let year=new Date().getFullYear()

let parts=date.split("-")

let month=parseInt(parts[1])
let day=parseInt(parts[2])

let sum=month+day+year

return reduceNumber(sum)

}