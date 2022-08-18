
window.addEventListener("load", ()=>{ 
  document.querySelector(".widget_container").style.display = "block"
    setTimeout(
      function open(e){
      const show =  document.querySelector(".widget_popup")
      show.classList.add("showPopUp")
      }, 500
  )
}) 
 
document.querySelector('.close_popup').addEventListener("click", ()=>{
    const show =  document.querySelector(".widget_popup")
     document.querySelector(".widget_container").style.display = "none"
      show.classList.remove("showPopUp")
})