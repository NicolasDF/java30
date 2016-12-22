window.addEventListener('DOMContentLoaded', function () {
    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');

    function setDate() {
        let now = new Date();
        let seconds = now.getSeconds();
        let secondsDegrees = ((seconds / 60) * 360) + 90;
        let minutes = now.getMinutes();
        let minutesDegrees = ((minutes / 60) * 360) + 90;
        let hour = now.getHours();
        if (hour > 12) {
            hour = hour - 12;
        }
        let hourDegrees = ((hour / 12) * 360) + 90;

        console.log(seconds);
        console.log(minutes);
        console.log(hour);


        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);

})
