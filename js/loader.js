async function loadNumber(num){

let res = await fetch(`data/numbers/${num}.json`)

return await res.json()

}