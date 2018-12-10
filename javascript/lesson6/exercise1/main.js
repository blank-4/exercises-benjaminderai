var date = new Date();

function myFunction() {
    var d = new Date();
    var e = d.getHours();/* ("13:00:00"); */
    var n = d.getDate();
    document.getElementById("horloge").innerHTML = n;
    document.getElementById("horloge").innerHTML = d;
    document.getElementById("horloge").innerHTML = d;
    setInterval(myFunction,1000)
}

myFunction();