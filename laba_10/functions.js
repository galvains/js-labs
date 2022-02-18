function ob1(){
	//let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let confirm = document.getElementById('confirm').value;
	try{
		if(password !== confirm){
			throw new Error('не совпадают пароли!');
		}
		else{
			let re = password.match(/[a-zA-Z\!\?]/g).join('');

			if(re != password | re == false){
				throw new Error('Неверные символы!');
			}
			if(password == confirm){
				document.getElementById('result1').innerHTML = 'Регистрация прошла успешно...';
			}
			else{
				throw new Error('Неверный логин или пароль!');
			}
		}
	}
	catch(Error){
		document.getElementById('result1').innerHTML = Error.name + ': ' + Error.message;
	}
	//document.getElementById('result1').innerHTML =  re;
}

function ob2(){
	let n = document.getElementById('n').value;
	let m = document.getElementById('m').value;
	let x = []; out =''; res = [];
	

	try{
		if(n != Number(n) | m != Number(m)){
			throw new Error('неверные символы!')
		}
		else{
			for (let i = 0; i < m; i++){
				x[i] = [];
					for (let k = 0; k < n; k++){			
						x[i][k] = Math.floor(Math.random() * 10);
							if(i > k){
								res.push(x[i][k]);
							}
							out = out + ' ' + x[i][k];
					}
				out = out + '<br>';
			}
			document.getElementById('result2').innerHTML = out + '<br>' + res.sort();
		}
	}
			
	catch (Error){
		document.getElementById('result2').innerHTML = Error.name + ': ' + Error.message;

	}
	//document.getElementById('result2').innerHTML = typeof n;
}



