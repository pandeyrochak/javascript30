const secondsHand= document.querySelector(".second-hand");
const hoursHand = document.querySelector(".hour-hand");
const minutesHand= document.querySelector(".min-hand");

function setDate(){
    const now = new Date();
    let secondsDeg=((now.getSeconds()/60)*360) - 90;
    let minutesDeg=((now.getMinutes()/60)*360) - 90;
    let hoursDeg=((now.getHours()/12)*360) + (now.getMinutes()/2);
    hoursDeg=hoursDeg-90;
    secondsHand.style.transform= `rotate(${secondsDeg}deg)`
    minutesHand.style.transform= `rotate(${minutesDeg}deg)`
    hoursHand.style.transform= `rotate(${hoursDeg}deg)`
    
}

setInterval(setDate, 1000);