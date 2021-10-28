const btn = document.querySelector(".btn-dark-mood")
btn.addEventListener("click",()=>{
  document.body.classList.toggle("dark")
})

const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".menute")
const hourHand = document.querySelector(".hour")



setInterval(setClock,1000);
function setClock(){
  const currentTime = new Date();
  const second = currentTime.getSeconds() / 60;
  const minutes = (second + currentTime.getMinutes()) /60 ;
  const hour = (minutes + currentTime.getHours()) / 12;

  setRotation(secondHand,second)
  setRotation(minuteHand,minutes)
  setRotation(hourHand,hour)
  
}

function setRotation(element,rotationRatio){
 element.style.setProperty("--rotation",rotationRatio * 360);
}

setClock();
