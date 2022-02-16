function ob1(){
	let str = 'aa aba abba abbba abca abea';	
	let search = str.match(/a(b?)a/g).toString();	
	let otv = search.replace(/a/g, "<a value=" + 'a' + " style='color:red'>" + 'a' +"</a>")
	
	document.getElementById('result1').innerHTML = otv;
}

function ob2(){
	var a = parseInt(document.getElementById('a').value).toString();
	let re = a.match(/^(19\d\d|20\d\d|2100)$/g);
	let otv = '';

	if(re != null){
		otv = 'является';
	}
	else if (re == null){
		otv = 'не является'
	}
	//let otv = '';
	//if (a = re){
	//	otv = 'является';
	//}
	//else{
	//	otv = 'не является'
	//}

	document.getElementById('result2').innerHTML = otv;
}


