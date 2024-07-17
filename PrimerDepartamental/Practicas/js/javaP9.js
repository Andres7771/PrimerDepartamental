var segundo = 0;
var minuto = 0;
var hora = 0;

function updateClock() {
  var d = new Date();
  segundo = d.getSeconds() * 6;
  minuto = d.getMinutes() * 6;
  hora = d.getHours() * 30 + Math.round(minuto / 12);

  document.getElementById("brazo-segundo").style.transform = "rotate(" + segundo + "deg)";
  document.getElementById("brazo-minuto").style.transform = "rotate(" + minuto + "deg)";
  document.getElementById("brazo-hora").style.transform = "rotate(" + hora + "deg)";

  // Get formatted time string
  var formattedTime = d.toLocaleTimeString();

  // Update digital clock element with formatted time
  document.getElementById("digital-clock").innerHTML = formattedTime;
}

setInterval(updateClock, 1000);

// Call updateClock initially to display time on page load
updateClock();
