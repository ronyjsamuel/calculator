function JavaPlus() {
	var a= document.getElementById('t1').value;
	var b = a.split('+');
	var c = a.split('-');
	var d = new Array();
	var e = new Array();
	var sum=0;
	var diff=0;

	b.forEach(function(inp){
		sum+=parseInt(inp);
		
	});

	c.forEach(function(inp2){
		if (d[0]!=parseInt(inp2)) {
			diff-=parseInt(inp2);
		}
		
	});
	
	
	document.getElementById('t2').value=sum;
	document.getElementById('t3').value=diff;
	document.getElementById('t4').value=(sum+diff);
	//alert(c);

}