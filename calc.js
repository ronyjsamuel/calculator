$(function(){

	$('#btnAdd').click(function(){
		var a = $("#txtNumber1").val();   
		var b = $("#txtNumber2").val();  
		if(a==''|| b=='')
		{
			alert("No input. Add input");
		}
		else
		{
			var x = parseInt(a);
			var y = parseInt(b);
			$("#txtResult").val(x/y);
		}
	});
	$('#btnSubstract').click(function(){
		var a = $("#txtNumber1").val();   
		var b = $("#txtNumber2").val();  
		if(a==''|| b=='')
		{
			alert("No input. Add input");
		}
		else
		{
			var x = parseInt(a);
			var y = parseInt(b);
			$("#txtResult").val(x/y);
		}
	});
	$('#btnMultiply').click(function(){
		var a = $("#txtNumber1").val();   
		var b = $("#txtNumber2").val();  
		if(a==''|| b=='')
		{
			alert("No input. Add input");
		}
		else
		{
			var x = parseInt(a);
			var y = parseInt(b);
			$("#txtResult").val(x/y);
		}
	});
	$('#btnDivision').click(function(){
		var a = $("#txtNumber1").val();   
		var b = $("#txtNumber2").val();  
		if(a==''|| b=='')
		{
			alert("No input. Add input");
		}
		else
		{
			var x = parseInt(a);
			var y = parseInt(b);
			$("#txtResult").val(x/y);
		}
	});

});