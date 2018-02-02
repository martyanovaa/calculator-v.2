var FirstNumber;
var SecondNumber;
var sign;

FirstNumber = Number(prompt("input First Number"));
SecondNumber = Number(prompt("input Second Number"));

sign = Number(prompt("What do you want, dude? / input 1,* input 2, - input 3, + input 4"));

if(sign===1){
var div = FirstNumber / SecondNumber;
document.write("div is:"+ div + "<br>")
}
if(sign===2){
	var star = FirstNumber * SecondNumber;
	document.write("star is " + star + "<br>")
}
if (sign===3) {
	var minus = FirstNumber - SecondNumber;
	document.write("minus is " + minus + "<br>")
}
if (sign===4) {
	var plus = FirstNumber + SecondNumber;
	document.write("plus is " + plus + "<br>")
}

// var plus = FirstNumber + SecondNumber;
// var min = FirstNumber - SecondNumber;
// var slash = FirstNumber / SecondNumber;
// var star = FirstNumber * SecondNumber;
// document.write(plus + "<br>");
// document.write(min + "<br>");
// document.write(slash + "<br>");
// document.write(star);