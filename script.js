"use strict";

function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString().split(" ").shift();
  const timeOutput = (document.getElementById("time").innerText = time);
  setTimeout(showTime, 1000);
}

showTime();
