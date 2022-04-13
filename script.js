// Start
// Timer Function

var timerCount = 0;
var minute = 0;
var second = 0;
var minBtn = document.getElementById("min");
var secBtn = document.getElementById("sec");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");

function start() {
    timerCount = (60 * minute) + second;
    var timer = setInterval(function() {
        timerCount--;
        minute = Math.floor(timerCount/60);
        second = Math.floor(timerCount - minute*60);
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
        if (timerCount <= 0) {
            clearInterval(timer);
            document.getElementById('minute').innerText = '0';
            document.getElementById('second').innerText = '00';
        }
    }, 1000);
}

function min() {
    minute++;
    document.getElementById('minute').innerText = minute;
}

function sec() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++
    }
    document.getElementById('second').innerText = second;
    document.getElementById('minute').innerText = minute;
}

function reset() {
    clearInterval(timer);
    timerCount = 0;
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '0';
    document.getElementById('second').innerText = '00';
}

minBtn.addEventListener("click", min);
secBtn.addEventListener("click", sec);
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

// End