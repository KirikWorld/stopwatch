const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const end = document.getElementById("end");

let time = parseInt(timer.textContent);
let minutes = 0;
let startinterval;

function starttime() {
    time += 1;
    timer.textContent = `${minutes}:` + time.toString();
    if (time < 10) {
        timer.textContent = `${minutes}:0` + time.toString();
    }
    if (time == 60) {
        minutes += 1;
        time = 0;
    }
}

function stoptime() {
    clearInterval(startinterval);
    time = 0;
    minutes = 0;
    timer.textContent = "0:00";
}

start.addEventListener("click", {
    handleEvent(event) {
        start.setAttribute('disabled', 'disabled');
        startinterval = setInterval(starttime, 1000);
    },
});
pause.addEventListener("click", {
    handleEvent(event) {
        start.removeAttribute('disabled');
        clearInterval(startinterval);
    },
});
end.addEventListener("click", {
    handleEvent(event) {
        start.removeAttribute('disabled');
        stoptime();
    },
});
