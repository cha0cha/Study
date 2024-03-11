const clock = document.querySelector("h2#clock");

function getClock() {
    
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); 5초마다 한번씩 실행

// setTimeout(sayHello, 5000); 5초후 한번 실행하고 끝
getClock();   // 사이트 업로드되자마자 실행
setInterval(getClock, 1000);