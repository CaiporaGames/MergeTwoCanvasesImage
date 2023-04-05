var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

ctx.fillStyle = 'rgba(255,0,0,.4)';
ctx.fillRect(20, 20, 20, 80);
ctx.fillStyle = 'rgba(205,255,23,.4)';
ctx.fillRect(30, 30, 40, 50);
ctx.fillStyle = 'rgba(5,255,0,.4)';
ctx.fillRect(40, 50, 80, 20);

var can2 = document.getElementById('canvas2');
var ctx2 = can2.getContext('2d');

ctx2.beginPath();
ctx2.fillStyle = "pink";
ctx2.arc(50, 50, 50, 0, Math.PI * 2, 1);
ctx2.fill();
ctx2.beginPath();
ctx2.clearRect(20, 40, 60, 20);

var can3 = document.getElementById('canvas3');
var ctx3 = can3.getContext('2d');

ctx3.drawImage(can, 0, 0);
ctx3.drawImage(can2, 0, 0);