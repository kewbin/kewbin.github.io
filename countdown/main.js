const targetDate = new Date("2023-05-20T00:00:00Z");
const countdown = document.getElementById("countdown");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysSpan.textContent = days;
    hoursSpan.textContent = prettyTime(hours);
    minutesSpan.textContent = prettyTime(minutes);
    secondsSpan.textContent = prettyTime(seconds);
}

function prettyTime(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
