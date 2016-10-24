function JavaPlus() {
	var a= document.getElementById('t1').value;
	var b = a.split('+');
	var sum=0;
	var c=0;
	b.forEach(function(inp){
		sum+=parseInt(inp);
	});
	document.getElementById('t2').value=sum;
}