function ob1(){
	let str = 'Дано предложение. Все буквы «е» в нем заменить буквой «и»';
	let otv = str.replace(/е/g, 'и');
	document.getElementById('result1').innerHTML = otv;
}

function ob2(){
	let word = 'буквосочетание';
	let otv = word[1] + word[3];
	document.getElementById('result2').innerHTML = otv;
}

function ob3(){
	let predl = 'Дано предложение поменять местами его первое и последнее слово';
	let arr = predl.split(' ');
	let tmp = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = tmp;
	document.getElementById('result3').innerHTML = arr;
}

function ob4(){
	let text = '2 Дан текст, в котором 55 имеются цифры. 7 а) Найти их сумму. б) Найти максимальную цифру';
	let arr = text.split(' ');
	let chars = [];
	let sum = 0;

	for (let i = 0; i < arr.length; i++){
		if (arr[i] = Number(arr[i])){
			chars.push(arr[i]);
			sum += arr[i];
		}
	}

	let Max = Math.max.apply(null, chars);	
	document.getElementById('result4').innerHTML = 'Сумма: ' + sum + '<br>' + 'макс: ' + Max;
}

