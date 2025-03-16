let workDuration = 25 * 60; // 25 minutes in seconds
let breakDuration = 5 * 60; // 5 minutes in seconds
let timer;
let isBreak = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

function startTimer(duration) {
    let time = duration;
    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (--time < 0) {
            clearInterval(timer);
            isBreak = !isBreak;
            alert(isBreak ? "Time's up! Take a break." : "Break is over! Back to work.");
            startTimer(isBreak ? breakDuration : workDuration);
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    clearInterval(timer);
    startTimer(workDuration);
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timerDisplay.textContent = "25:00";
    isBreak = false;
});
