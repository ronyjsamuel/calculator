/*$(document).ready(function(){
	var calc=new Calculator();
	$('#btnAdd').click(function(){
		calc.add();
	});
	$('#btnSubstract').click(function(){
		calc.sub();
	});
	$('#btnMultiply').click(function(){
		calc.mul();
	});
	$('#btnDivision').click(function(){
		calc.div();
	});
});*/

class Calculator{
	constructor(){
		//let a,b = ($("#txtNumber1").val(),$("#txtNumber2").val());
	}
	add(){
		let [a,b] = [parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
		$("#txtResult").val(a+b);
	}
	sub(){
		let [a,b] = [parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
		$("#txtResult").val(a-b);
	}
	mul(){
		let [a,b] = [parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
		$("#txtResult").val(a*b);
	}
	div(){
		let [a,b] = [parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
		$("#txtResult").val(a/b);
	}
}

