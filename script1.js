function Add() {
	 var num1 ;
	 var num2 ;
	 num1 = parseFloat(document.getElementById("input1").value) ;
	 num2 = parseFloat(document.getElementById("input2").value) ;
	 parseFloat(document.getElementById("input3").value = num1 + num2) ;
}
function Sub() {
	var num1 ;
	var num2 ;
	num1 = parseFloat(document.getElementById("input1").value) ;
	num2 = parseFloat(document.getElementById("input2").value) ;
	parseFloat(document.getElementById("input3").value = num1 - num2) ;
}
function Mult() {
	var num1 ;
	var num2 ;
	num1 = parseFloat(document.getElementById("input1").value) ;
	num2 = parseFloat(document.getElementById("input2").value) ;
	parseFloat(document.getElementById("input3").value = num1 * num2) ;
}
function Div() {
	var num1 ;
	var num2 ;
	num1 = parseFloat(document.getElementById("input1").value) ;
	num2 = parseFloat(document.getElementById("input2").value) ;
	if (num2==0) {
		document.getElementById("input3").value = "No /" ;
	}
	else {
		parseFloat(document.getElementById("input3").value = num1 / num2) ;
	}
}
function Res()  {
	document.getElementById("input1").value ;
	document.getElementById("input2").value ;
	document.getElementById("input3").value ;
}