function ob1(){
	let n = parseInt(document.getElementById('n').value);
	let m = parseInt(document.getElementById('m').value);
	let x = []; out =''; schet = 0;

	for (let i = 0; i < m; i++){
		x[i] = [];
		for (let k = 0; k < n; k++){			
			x[i][k] = Math.floor(Math.random() * 10);
			if(x[i][k] == 0){
				schet += 1
			}
			out = out + ' ' + x[i][k];
		}
		out = out + '<br>';
	}

	
	document.getElementById('result1').innerHTML = out + '<br>' + schet;
}
function ob2(){
	let out =''; res = '';
	x = [
		[4, 6, 0],
		[1, 9, 2],
		[3, 4, 2],
	]; 

	for (let i = 0; i < x.length; i++){
		for (let k = 0; k < x[i].length; k++){				
			out += x[i][k] + ' ';
		}
		out += '<br>'
	}
	for (let i = 0; i < x.length; i++){
		for (let k = 0; k < x[i].length; k++){	
			if(i < k){
				let tmp = x[i][k];
				x[i][k] = x[k][i];
				x[k][i] = tmp;				
			}
			res += x[i][k] + ' ';	
		}
		res += '<br>'
	}

	
	document.getElementById('result2').innerHTML = out  + '<br>' + res;
}



