const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

const setClock = setInterval(function clock() {
  let dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  // 30 degree for every hour
  let calcHr = hr * 30 + min / 2;
  // console.log(calcHr);
  // 6 degree for every min and sec
  let calcMin = min * 6;
  let calcSec = sec * 6;

  hour.style.transform = `rotate(${calcHr}deg)`;
  minute.style.transform = `rotate(${calcMin}deg)`;
  seconds.style.transform = `rotate(${calcSec}deg)`;
}, 1000);

// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());
