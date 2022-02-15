function ob1(){
	let a = parseInt(document.getElementById('a').value);
	let k = parseInt(document.getElementById('k').value);

	a^(1<<k);
	b = a^(1<<k);

	document.getElementById('result1').innerHTML =  a.toString(2) + '<br>' + b.toString(2);

}




function ob2(){
	let a = parseInt(document.getElementById('a').value);
	schet = 0;
	let b = abs(a);
	while (b > 0){
		if ((b & 1) & (b >> 1)){
			schet ++;
			b >>= 1
		}
	}


	document.getElementById('result2').innerHTML = b.toString(2) + '<br>' + schet;
}
