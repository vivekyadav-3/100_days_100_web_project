let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const workBtn = document.getElementById('work-mode');
const breakBtn = document.getElementById('break-mode');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    pauseTimer();
    timeLeft = workBtn.classList.contains('active') ? 25 * 60 : 5 * 60;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

workBtn.addEventListener('click', () => {
    workBtn.classList.add('active');
    breakBtn.classList.remove('active');
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
});

breakBtn.addEventListener('click', () => {
    breakBtn.classList.add('active');
    workBtn.classList.remove('active');
    pauseTimer();
    timeLeft = 5 * 60;
    updateDisplay();
});

// Initialize display
updateDisplay();
