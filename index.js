window.onload = function(){
    var ms = 00;
    var seconds = 00;

    var appendMs = document.getElementById("ms");
    var appendSeconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var interval ;
    
    start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    stop.onclick = function (){
        clearInterval(interval);
    }
    reset.onclick = function(){
        clearInterval(interval);
        ms = "00";
        seconds="00";
        appendMs.innerHTML=ms;
        appendSeconds.innerHTML=seconds;
    }
    function startTimer(){
        ms++;
        if(ms <= 9){
            appendMs.innerHTML = "0" + ms;
        }
        if (ms > 9){
            appendMs.innerHTML = ms;
        }
        if(ms > 99 ){
            seconds++;
            appendSeconds.innerHTML = "0"+ seconds;
            ms = 0;
            appendMs.innerHTML= "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        }
    }
    
 