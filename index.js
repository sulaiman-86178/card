

 document.querySelector('button').addEventListener('click',function(){


var name = document.querySelector('.input').value;
console.log(name);
var yes =document.querySelector('.peru').textContent=name;
console.log(yes);



var cardnumber = document.querySelector('#email').value;
console.log(cardnumber);
document.querySelector('.p').textContent=cardnumber;

var date = document.querySelector('.in').value;
console.log(date);
document.querySelector('.cvc1').textContent=date;

var dat = document.querySelector('.in1').value;
console.log(dat);
document.querySelector('.cvc2').textContent=dat;

 });
