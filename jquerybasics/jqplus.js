$(document).ready(function() {
	
	$("#b1").click(function(){
		var a = $("#t1").val();
        var b = a.split('+');
        var sum=0;
        b.forEach(function(inp){
        	sum +=parseInt(inp);
        })
        $("#t2").val(sum);
    });	
});