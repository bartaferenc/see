counter = document.getElementById("counter").innerHTML = Math.floor(Math.random()*1000);
setInterval(function() {counter = document.getElementById("counter").innerHTML = counter = document.getElementById("counter").innerHTML -1}, 4000);
if(document.getElementById("counter").innerHTML == 0){
    alert("Kész.")
}

