(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
})(window.jQuery);

var clockElement = document.getElementById("clock");
var startTime = Date.now();

function updateClock() {
  var elapsedTime = Date.now() - startTime;
  var seconds = Math.floor(elapsedTime / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  clockElement.textContent =
    "Time on Page: " + hours + "h " + minutes + "m " + seconds + "s";
}

setInterval(updateClock, 1000);
