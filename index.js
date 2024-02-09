let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let Current_Time = new Date();
  hrs.innerText = Current_Time.getHours();
  min.innerText = Current_Time.getMinutes();
  sec.innerText = Current_Time.getSeconds();
}, 1000);
