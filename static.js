const secondshand= document.getElementById('seconds-hand')
const minuteshand= document.getElementById('minutes-hand')
const hourshand= document.getElementById('hours-hand')

function getTime(){
    const now= new Date(new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}))
    const seconds= now.getSeconds()
    const minutes= now.getMinutes()
    

    
    var hours= now.getHours()
    if (hours>12){
      var hour
      hour=hours-12
     
    }
    else {
      hour=hours
    }
    
    const timeInterval=6
    
  secondshand.style.transform='rotate('+(seconds*timeInterval)+'deg)'
  minuteshand.style.transform='rotate('+(minutes*timeInterval+seconds/10)+'deg)'
  hourshand.style.transform='rotate('+(hour*30+minutes/2)+'deg)'

}

setInterval(getTime,1000)