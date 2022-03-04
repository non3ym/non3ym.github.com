 function dateee() {
    
    var datee = new Date();
     
    var d = datee.getDate();
        if (d<10){
            d = "0" + d;
        }
    var m = datee.getMonth() + 1;
        if (m<10){
            m = "0" + m;
        }
    var y = datee.getFullYear();
    
    document.getElementById("today").innerHTML = d + " - " + m + " - " + y;
    setTimeout(dateee, 1000);
}
