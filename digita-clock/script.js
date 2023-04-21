setInterval(function () {

    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hour >= 12){
        session = "PM"
        hour -= 12;
        if(hour < 10){
            hour = `0${hour}`;
        }
    }
    if(mins < 10){
        mins = `0${mins}`;
    }

    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    document.getElementById("hh").innerHTML = `${hour}`;
    document.getElementById("mm").innerHTML = `${mins}`;
    document.getElementById("ss").innerHTML = `${seconds}`;
    document.getElementById("sesn").innerHTML = `${session}`;

   


}, 1000)


