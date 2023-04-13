const targetDate = new Date("2023-05-20T00:00:00Z");
const countdown = document.getElementById("countdown");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
var ran = false;

function triggerCelebration() {
    const finishedContainer = document.createElement('div');
    finishedContainer.classList.add('finished-container');
    const finished = document.createElement('h2');
    finished.classList.add('finished');
    finishedContainer.appendChild(finished);
    document.body.appendChild(finishedContainer);

    var end = Date.now() + (15 * 1000);
    const colors = ['#347deb', '#ededed'];

    (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });
      
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

    countdown.style.display = 'none';
    finishedContainer.style.display = 'block';
}

function adjustPulseIntensity(timeRemaining) {
    const totalTime = targetDate - new Date("2023-05-01T00:00:00Z");
    const percentageRemaining = (timeRemaining / totalTime) * 100;
    console.log(percentageRemaining);
    const maxPulseIntensity = 0.1;
    const minPulseIntensity = 20;
    const pulseIntensity = maxPulseIntensity - percentageRemaining / 100 * (maxPulseIntensity - minPulseIntensity);
    console.log(pulseIntensity);

    countdown.style.animation = `pulse linear ${pulseIntensity}s infinite`;
}

function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    adjustPulseIntensity(timeRemaining);

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysSpan.textContent = days;
    hoursSpan.textContent = prettyTime(hours);
    minutesSpan.textContent = prettyTime(minutes);
    secondsSpan.textContent = prettyTime(seconds);

    if (timeRemaining <= 0) {
        if (ran) {
            clearInterval(countdownInterval);
        }
        triggerCelebration();
    } else {
        ran = true;
    }

}

function prettyTime(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

updateCountdown();
if (ran) {
    const countdownInterval = setInterval(updateCountdown, 1000);
}
