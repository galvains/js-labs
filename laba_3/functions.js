function ob1(){
	arr = [];
	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
	}
	document.getElementById('result1').innerHTML = arr;
}

function ob1_1(){
	arr.splice(2,2);
	document.getElementById('result1').innerHTML = arr;
}

function ob1_2(){
	arr.unshift(1, 2);
	document.getElementById('result1').innerHTML = arr;
}

function ob1_3(){
	arr.reverse()
	document.getElementById('result1').innerHTML = arr;
}

function ob1_4(){
	res = arr.sort((a, b) => b - a);
	document.getElementById('result1').innerHTML = res;
}

function ob2(){
	var arr = [];
	var shcet = 0;

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
		if (arr[i] % 2 == 0 && arr[i] != 0){
			shcet += 1 ;
		}
	}
	document.getElementById('result2').innerHTML = arr + '|' + shcet;
}

function ob3(){
	var arr = [];
	var shcet = 0;
	var arr2 = [];

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
		shcet += arr[i] / 5;		
	}

	arr2 = arr.slice(0);
	arr2[4] = shcet;

	document.getElementById('result3').innerHTML = arr + '<br>' + arr2;
}

function ob4(){
	var arr = [];
	var arr2 = [];

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));			
	}

	arr2 = arr.slice(0);

	function swapMinWithMax(arr2) {
			Min = arr2[0],
			Max = arr2[0],
			indexMin = 0,
			indexMax = 0;
		for (var i = 0; i < arr.length; i++) {
			if (Min > arr2[i]) {
				Min = arr2[i];
				indexMin = i; 
		}
		else if (Max < arr2[i]) {
			Max = arr2[i];
			indexMax = i; 
		}
		}
		arr2[indexMin] = Max;
		arr2[indexMax] = Min;
		return arr;
	  }

	swapMinWithMax(arr2);
	document.getElementById('result4').innerHTML = arr + '<br>' + arr2;
}

function ob5(){
	var arr = [];
	var shcet = 0;

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
	}

	for (var j in arr){
		if (arr[j] > arr[0] && arr[j] < arr[2]){
			shcet += 1;
		}
	}
	
	document.getElementById('result5').innerHTML = arr + '<br>' + shcet;
}

function ob6(){
	var arr = [];
	var arr2 = [];

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
	}

	arr2 = arr.slice(0);

	for (var j in arr2){
		if (arr2[j] == 0){
			arr2[j] = 10;
		}
	}
	document.getElementById('result6').innerHTML = arr + '<br>' + arr2;
}

function ob7(){
	var arr = [];
	var sum = 0;
	var arr2 = [];

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));
		if (arr[i] % 2 != 0){
			sum += arr[i] ;
		}
	}
	arr2 = arr.slice(0);
	for (var j in arr2){
		if (arr2[j] % 3 == 0 && arr2[j] != 0){
			arr2[j] = sum;
		}
	}
	document.getElementById('result7').innerHTML = arr + '<br>' + sum + '<br>' + arr2;
}

function ob8(){
	var arr = [5, 7, 1, 4, 2, 9, 3, 10, 6, 8];
	var schet = 0;

	function swapMinWithMax(arr) {
			var Min = arr[0];
			var Max = arr[0];
			var indexMin = 0;
			var indexMax = 0;
			
		for (var i = 0; i < arr.length; i++) {
			if (Min > arr[i]) {
				Min = arr[i];
				indexMin = i; 
			}
			else if (Max < arr[i]) {
				Max = arr[i];
				indexMax = i; 
			}
		}	

		if (indexMin < indexMax){
			for(var i = indexMin; i <= indexMax; i++){
				schet += 1;
			}
		}
		else{
			for(var i = indexMax; i <= indexMin; i++){
				schet += 1;
			}
		}			
	}
	

	swapMinWithMax(arr);
	document.getElementById('result8').innerHTML = arr + '<br>' + schet;

}

function ob9(){
	arr = [];
	sum_chet = 0;
	pr_nechet = 1;
	for (var i = 0; i < 7; i++){
		arr.push(Math.round(Math.random() * 7));
		if (arr[i] % 2 != 0){
			pr_nechet *= arr[i];
		}
	}
	for (var j = 0; j < arr.length; j = j + 2){
		sum_chet += arr[j];
	}

	document.getElementById('result9').innerHTML = arr + '<br>' + '* нечет: ' + pr_nechet + '<br>' + '+ чет: ' + sum_chet;

}

function ob10(){
	var arr = [];
	var sum = 0;
	var arr2 =[];

	for (var i = 0; i < 7; i++){
		arr.push(Math.round(Math.random() * 7));		
	}

	arr2 = arr.slice(0);

	for (var j in arr2){
		if (arr2[j] % 3 == 0){
			arr2[j] = 0;
			sum += 1;
		}
	}
	document.getElementById('result10').innerHTML = arr + '<br>' + arr2 + '<br>' + sum ;
}

function ob11(){
	var arr = [3, -2, 10, 13, -2, 4, 8, -1]
	var sum = 0;
	var schet = 0;
	var ob_sum = 0;
	var ob_schet = 0;

		for(var i in arr){			
			if (arr[i] > 0){
				sum += arr[i];
				schet += 1;
			}
		}
		
	var sr_arifm = sum / schet;
		for (var j in arr){
			if(Math.abs(arr[j]) > sr_arifm){
				ob_schet += 1;
				ob_sum += arr[j]
			}
		}

	document.getElementById('result11').innerHTML = arr + '<br>' + 'Сумма: ' + ob_sum + '<br>' + 'Кол-во: ' +ob_schet + '<br>' + 'Ср.арифм: ' +sr_arifm;
}