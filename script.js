const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const res = document.getElementById('reset')
const serch = document.getElementById('search')
let authornum = 640631102+ parseInt(length.value)
let state = 0

btn_toggle.onclick = () => {
  if(state == 0){
  author.innerHTML = authornum
  state ++

}else{
  author.innerHTML = "640631102 PANNAWIT PANWONG"
  state -- 
}
}

res.onclick = () =>{
  length.value = 5
  color.value = "#FF0000"
}
serch.onclick = () =>{
  
}
// more codes for Search and Reset buttons here
