function ob1(){
	let a = parseInt(document.getElementById('a').value);
	let k = parseInt(document.getElementById('k').value);

	let str = a.toString(2);
	let arr = str.split('');
	arr.reverse();
	
	
	for (var i = 0; i < arr.length; i++){
		if(i == k){
			//if(arr[i] == 0){
			//	arr[i] = 1;
			//}
			//else{
			//	arr[i] = 0
			//}
			arr.splice(i, 1, ~arr[i + 1]);			
		}
	}
	arr.reverse();
	//let res = arr.join('');
	let otv = parseInt(arr.join(''), 2);

	document.getElementById('result1').innerHTML =  otv;

}




function ob2(){
	let a = parseInt(document.getElementById('a').value);



	document.getElementById('result2').innerHTML = res;
}
