const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const time = () => {
    const now =  new Date();
    const seconds = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    console.log(`${hour-12}:${minute}:${seconds} PM`)
    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minute / 60) * 360) + 90;
    const hourDegree = ((hour / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`
    hourHand.style.transform = `rotate(${hourDegree}deg)`
    
}

setInterval(time, 1000);