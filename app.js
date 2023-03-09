function showtime(){
  let date=new Date()
  let hours=date.getHours(); //0-23 
  let minutes=date.getMinutes() //0-59
  let seconds=date.getSeconds() //0-59

  let formatHours=convertFormat(hours)
  hours=addZero(hours)
  minutes=addZero(minutes)
  seconds=addZero(seconds)
  document.getElementById('clock').innerHTML=`${hours}: ${minutes}: ${seconds} ${formatHours}`
}

function convertFormat(time){
  let format='AM'
  if(time>=12){
    format='PM'
  }
  return format
}

function addZero(time){
if(time<10){
  time="0"+ time;
}
return time
}
showtime()

setInterval(showtime,1000)