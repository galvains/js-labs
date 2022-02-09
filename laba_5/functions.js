function ob1(){
	array = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var arr_vstav = [];


	function bubble(array){
		for(let j = 0; j < array.length; j++){
			for (let i = 0; i < array.length - 1 - j; i++){
				if(array[i] > array[i + 1]){
					let swap = array[i];
					array[i] = array[i + 1];
					array[i + 1] = swap;
				}
			}
		}
		return array;
	}

	function shell(array){
    	var len = array.length, i = Math.floor(len/2);
    	while (i > 0){ 
			for (var j = 0; j < len; j++){ 
				var k = j, t = array[j];
    	      	while (k >= i && array[k-i] > t){ 
					array[k] = array[k-i]; k -= i; }
					array[k] = t;
    	    }
    	  	i = (i==2) ? 1 : Math.floor(i*5/11);
    	}
    	return array;
	}

	function vstav(array){
		for(var i = 0; i < array.length; i++){
			var k = i, tmp;
			arr_vstav.push(array[i]);
			while (k > 0 && arr_vstav[k] < arr_vstav[k - 1]){
				tmp = arr_vstav[k - 1];
				arr_vstav[k - 1] = arr_vstav[k];
				arr_vstav[k] = tmp;
			}
		}
		return arr_vstav;
	}

	document.getElementById('result1').innerHTML = array + '<br>' + 'bubble: ' + bubble(array) + '<br>' + 'shell: ' + shell(array) + '<br>' + 'vstav: ' + vstav(array);

}

function ob2(){
	array = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});

	var a = parseInt(document.getElementById('a').value);
	var res = '';

	function bubble(array){
		for(let j = 0; j < array.length; j++){
			for (let i = 0; i < array.length - 1 - j; i++){
				if(array[i] > array[i + 1]){
					let swap = array[i];
					array[i] = array[i + 1];
					array[i + 1] = swap;
				}
			}
		}
		return array;
	}
	
	var arr2 = bubble(array);

	for(var i = 0; i < arr2.length; i++){
		if(a == arr2[i]){
			res = i;
			break
		}
		else if(a != arr2[i]){
			res = 'такого элемента нет!'
		}
	}
	
	
	document.getElementById('result2').innerHTML = arr2 + '<br>' + 'id: ' + res;

}
	
	
