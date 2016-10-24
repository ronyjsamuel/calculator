function c_sweet() {
	var a = document.getElementById('t1').value;
	var b = a.split(',');
	var c = new Array();
	b.forEach(function(inp){
		c.push(inp);
	});
	
	var d = c.indexOf(document.getElementById('t2').value);
	var e = c.lastIndexOf(document.getElementById('t2').value);
	if(d==e){
		document.getElementById('t3').value=(d);
	}
	else{
		document.getElementById('t3').value=(e-d);
	}

	

}