const videoEle = document.querySelector(".videoContainer")
const btnEle = document.querySelector(".btn")
const cancelEle = document.querySelector("#cancel")
 btnEle.addEventListener("click", ()=>{
  videoEle.classList.remove("active")
 })
 cancelEle.addEventListener("click", ()=>{
  videoEle.classList.add("active")
 })