function clocky() {
    
    var time = new Date();
    var h = time.getHours();
        if (h<10){
            h = "0" + h;
        }
    var m = time.getMinutes();
        if (m<10){
            m = "0" + m;
        }
    var s = time.getSeconds();
        if (s<10){
            s = "0" + s;
        }
    
    document.getElementById("timer").innerHTML = h + " : " + m + " : " + s;
    setTimeout(clocky, 1000);
}