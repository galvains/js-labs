function lab(){
	arr = [];
	arr[0] = {surname:'Ivanov', age: 'st. Gurova, h. 32', date: 'March 2, 2019'};
	arr[1] = {surname:'Petrov', age: 'st. Zavodskaya, h. 2', date: 'April 23, 2020'};
	arr[2] = {surname:'Sidorov', age: 'st. Artema, h. 56', date: 'December 5, 2021'};
	arr[3] = {surname:'Ganzha', age: 'st. Petrova, h. 1', date: 'June 4, 2027'};
	arr[4] = {surname:'Ganzha', age: 'st. Petrova, h. 1', date: 'June 4, 2027'}; 
	arr[5] = {surname:'Sidorov', age: 'st. Artema, h. 56', date: 'December 5, 2021'}; 

	let otv = ''; 

	for(let i in arr){
		for(let k in arr[i]){
			otv += arr[i][k] + ' | ';
		}
		otv += '<br>';
	}
	document.getElementById('result').innerHTML =  otv;
}

function sort_delete(){
	arr.sort(function(a, b){
		let surnameA = a.surname.toLowerCase(), surnameB = b.surname.toLowerCase()
		if (surnameA < surnameB){
			return -1
		}
		if (surnameA > surnameB){
			return 1
		}
		return 0
	})
	let otv = '';
	let set = new Set(arr.map(JSON.stringify));
	let new_arr = Array.from(set).map(JSON.parse);

	//for(let i in new_arr){
	//	otv += i + '|';
	//}

	//for(let i = 0; i < arr.length; i++){
	//	obj[arr[i]['surname']] = arr[i];
	//}f

	for(let i in new_arr){
		for(let j in new_arr[i]){
			otv += new_arr[i][j] + ' | ';
		}
		otv += '<br>';
	}

	document.getElementById('result').innerHTML =  otv;
}

function sort_date(){
	arr.sort(function(a, b){
		let dateA = new Date(a.date), dateB = new Date(b.date);
		return dateA - dateB;
	})
	let otv = ''; 

	for(let i in arr){
		for(let k in arr[i]){
			otv += arr[i][k] + ' | ';
		}
		otv += '<br>';
	}
	document.getElementById('result').innerHTML =  otv;
}