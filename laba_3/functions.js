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
	var arr = [];
	var arr2 = [];
	var schet = 0;

	for (var i = 0; i < 5; i++){
		arr.push(Math.round(Math.random() * 5));			
	}

	function swapMinWithMax(arr) {
			Min = arr[0],
			Max = arr[0],
			indexMin = 0,
			indexMax = 0;
			

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
	}

	swapMinWithMax(arr);

	if (indexMin < indexMax){
		arr2.unshift(indexMax);
		arr2.unshift(indexMin);
	}
	else if (indexMin > indexMax){
		arr2.unshift(indexMin);
		arr2.unshift(indexMax);
	}
	else if (indexMin -1 == indexMax && indexMax -1 == indexMin){
		return schet;
	}

	for(var g in arr2){	
		/*arr2.splice(1, 0, arr2[0] + 1);	
		schet += 1;
		if(arr2[g] == arr2[arr2.length -1]){
			break
		}
		else {
			schet += 1;
		}*/
	}


	document.getElementById('result8').innerHTML = arr + '<br>' + 'id_min: ' + indexMin + ' | ' + 'id_max: ' + indexMax + '<br>' + arr2;

}

function ob9(){
	pass
	document.getElementById('result9').innerHTML = res;
}

function ob10(){
	pass
	document.getElementById('result10').innerHTML = res;
}