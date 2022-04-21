function rec(){
	let n = 5;
	let res = '';

	F(n);
	function F(n){
	//res += n + ' ';
	//	if(n < 4){
	//		F(n + 1);
	//		F(n + 3);
	//	}
	//}

	if (n > 1){
		F(n * F(n-1))
	}
	else{
		F(1);
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
	

	document.getElementById('result2').innerHTML = 'рекурсия: ' + res;
}

function ob2_for(){
	let n = parseInt(document.getElementById('b').value);
	let res = 1; g = 2; v = 1;

	for(let i = 0; i < n; i++){
		res *= (g / v);
		if(i % 2){
			g += 2;
		}
		else{
			v += 2;
		}
	}

	document.getElementById('result3').innerHTML = 'цикл: ' + res;
}