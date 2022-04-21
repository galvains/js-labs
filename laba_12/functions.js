function rec(){
	let n = parseInt(document.getElementById('a').value);
	let res = '';

	F(n);
	function F(n){
		res += n + ' ';
		if(n < 4){
			F(n + 1);
			F(n + 3);
		}
	}

	document.getElementById('result1').innerHTML = res;
}

function ob2(){
	let n = parseInt(document.getElementById('b').value);
	res = 0; 

	rec2(n);
	function rec2(n){
		res += n;
		if (n == 1){
			res = 2;
		}
		else if (n % 2){
			res = (n + 1) * rec2(n - 1) / n;
		}
		else{
			res = n * rec2(n - 1) / (n + 1);
		}
		return res;
	}
	

	document.getElementById('result2').innerHTML = res;
}