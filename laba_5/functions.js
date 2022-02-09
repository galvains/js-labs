function ob1(){
	var arr = Array.prototype.map.call(document.getElementsByName("vvod"), function (item) {
		return parseInt(item.value, 10);
	});
	var arr_bubble = arr.slice(0);

	//for(var j = 0; j < arr_bubble.lenght; j++){
	//	for (var i = 0; i < arr_bubble.lenght - 1; i++){
	//		if(arr_bubble[i] > arr_bubble[i + 1]){
	//			var swap = arr[i];
	//			arr_bubble[i] = arr_bubble[i + 1];
	//			arr_bubble[i + 1] = swap;
	//		}
	//	}
	//}	

	function bubble(arr_bubble){
		for(var j in arr_bubble){
			for (var i in arr_bubble){
				if(arr_bubble[i] > arr_bubble[i + 1]){
					var swap = arr_bubble[i];
					arr_bubble[i] = arr_bubble[i + 1];
					arr_bubble[i + 1] = swap;
				}
			}
		}
	}

	bubble(arr_bubble);
	document.getElementById('result1').innerHTML = arr + '<br>' + arr_bubble;
}

	
	
