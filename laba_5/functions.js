function ob1(){
	var array = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var arr_bubble = array.slice(0);
	var arr_shell = array.slice(0);
	var arr_vstav = [];


	function bubble(arr_bubble){
		for(let j = 0; j < arr_bubble.length; j++){
			for (let i = 0; i < arr_bubble.length - 1 - j; i++){
				if(arr_bubble[i] > arr_bubble[i + 1]){
					let swap = arr_bubble[i];
					arr_bubble[i] = arr_bubble[i + 1];
					arr_bubble[i + 1] = swap;
				}
			}
		}
		return arr_bubble;
	}

	function shell(arr_shell){
    	var len = arr_shell.length, i = Math.floor(len/2);
    	while (i > 0){ 
			for (var j = 0; j < len; j++){ 
				var k = j, t = arr_shell[j];
    	      	while (k >= i && arr_shell[k-i] > t){ 
					arr_shell[k] = arr_shell[k-i]; k -= i; }
					arr_shell[k] = t;
    	    }
    	  	i = (i==2) ? 1 : Math.floor(i*5/11);
    	}
    	return arr_shell;
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

	document.getElementById('result1').innerHTML = array + '<br>' + 'bubble: ' + bubble(arr_bubble) + '<br>' + 'shell: ' + shell(arr_shell) + '<br>' + 'vstav: ' + vstav(array);
}

	
	
