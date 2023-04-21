setInterval(() => {
    const date = new Date();
    const hour = date.getHours() % 12;
    // 
    const min  = date.getMinutes();
    const sec = date.getSeconds();

    document.getElementById("hours").style.transform = `rotate(${30*hour}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${6*min}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${6*sec}deg)`;
}, 1000)