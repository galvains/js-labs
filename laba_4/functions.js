function ob1(){
	var arr = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var g = 0;
	
	for (var i in arr){
		g += (1/arr[i]);
	}
	document.getElementById('result1').innerHTML = arr + '<br>' + 1/g;
}

function ob2(){
	var arr = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var otv = '';

	//var schet = 2;
	//var arr2 = arr.slice(0);

	/*arr2.sort(function(arr, arr2){return arr - arr2});
	var g = 0;
	if (arr == arr2){
		otv = 'упорядочен';
	}
	else{*/

		for (var i = 0; i <= arr.length; i++){
			if (arr[i] > arr[i+1]){
				otv = 'не упорядочен, элемент под номером: ' + i;
				break				
			}
			else {
				otv = 'упорядочен';
				//schet = schet + 1;
			}
			
		}
	
	document.getElementById('result2').innerHTML = arr + '<br>' + otv;
}

function ob3(){
	var arr = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var a = parseInt(document.getElementById('a').value);
	var arr2 = arr.slice(0);
	var i = 0;


	while (i <= arr2.length) {		
		arr2.splice(i, 0, 'g');
		i += 2;	
	}
	for (var i = 1; i < arr2.length; i += 2){
		if (arr2[i] % a == 0){			
			arr2[i - 1] = a;						
		}
	}
	for (var i = 1; i < arr2.length; i += 2){
		if (arr2[i] < 0){			
			arr2[i + 1] = a;						
		}
	}
	for (var i = 0; i < arr2.length; i++){
		if (arr2[i] == 'g'){			
			arr2.splice(i,1);						
		}
	}
	
	document.getElementById('result3').innerHTML = arr + '<br>' + arr2;
}

function ob4(){
	var arr = Array.prototype.map.call(document.getElementsByName("vvod2"), function (item) {
		return parseInt(item.value, 10);
	});
	var k = parseInt(document.getElementById('k').value);
	var s = parseInt(document.getElementById('s').value);
	var schet = 0;

	var arr2 = arr.slice(0);
	arr2.splice(2, 7, 'g');

	var arr3 = arr.slice(2,9);
	arr3.reverse();

	for (var i = 0; i < arr2.length; i++){
		if (arr2[i] == 'g'){			
			arr2.splice(i, 1, arr3);						
		}
	}

	var arr4 = arr.slice(0);
	for (var i = 0; i < arr4.length; i++){
		if (i >= k && i < s-1){
			schet += 1;			
								
		}
	}
	arr4.splice(k, schet, 'g');	

	arr3 = arr.slice(k,s-1);
	arr3.reverse();

	for (var i = 0; i < arr4.length; i++){
		if (arr4[i] == 'g'){			
			arr4.splice(i, 1, arr3);						
		}
	}

	var arr5 = arr.slice(0);
	var min = arr5[0];
	var max = arr5[0];
	var indexMin = 0;
	var indexMax = 0;
	var schet_mm = 0;

	for (var i = 0; i < arr5.length; i++){
		if (max < arr5[i]){			
			max = arr5[i];
			indexMax = i;			
		}
		else if (min > arr5[i]){
			min = arr5[i];
			indexMin = i;
		}
	}

	if (indexMin < indexMax){
		for(var i = indexMin; i <= indexMax; i++){
			schet_mm += 1;
		}
	}
	else{
		for(var i = indexMax; i <= indexMin; i++){
			schet_mm += 1;
		}
	}

	
	//for (var i = 0; i < arr5.length; i++){
	//	if (arr5[i] >= min && arr5[i] <= max){
	//		schet_mm += 1;										
	//	}
	//	else{
	//		break
	//	}
	//}
	arr5.splice(indexMin, schet_mm, 'g');

	arr3 = arr.slice(indexMin,indexMax+1);
	arr3.reverse();
	for (var i = 0; i < arr5.length; i++){
		if (arr5[i] == 'g'){			
			arr5.splice(i, 1, arr3);						
		}
	}

	document.getElementById('result4').innerHTML = 'нач. ' + arr + '<br>' + 'A)___' + arr2 + '<br>' + 'Б)___' + arr4 + '<br>' + 'В)___' + arr5;
}
