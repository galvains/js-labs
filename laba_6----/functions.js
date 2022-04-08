function ob1(){
	let a = parseInt(document.getElementById('a').value);
	let k = parseInt(document.getElementById('k').value);

	a^(1<<k);
	let b = a^(1<<k);

	document.getElementById('result1').innerHTML =  a.toString(2) + '<br>' + b.toString(2);
}




/*function ob2(){
	let a = parseInt(document.getElementById('a').value);
	let schet = 0;
	let mask = 11;

	a & mask = 00000000000000000000000000000011
	for(let i = 0; i < a.toString().length; i++){
		if (a & mask == 11){
			schet += 1;
		}
		else if (a & mask != 11){
			i += 1
		}
	}

	document.getElementById('result2').innerHTML = d;
}
*/

function crypt(){
	let text = document.getElementById('crypt').value.toLowerCase().split('');
	let res = '';
	letters = {
	'a': '. -', 
	'b': '- . . .', 
	'c': '- . - .', 
	'd': '- . .', 
	'e': '.', 
	'f': '. . - .', 
	'g': '- - .', 
	'h': '. . . .',
	'i': '. .', 
	'j': '. - - -', 
	'k': '- . -', 
	'l': '. - . .', 
	'm': '- -', 
	'n': '- .', 
	'o': '- - -', 
	'p': '	. - - .', 
	'q': '- - . -',
	'r': '. - .', 
	's': '. . .', 
	't': '-', 
	'u': '. . -', 
	'v': '. . . -', 
	'w': '. - -', 
	'x': '- . - -', 
	'y': '- . . -', 
	'z': '- - . .',
	};
	
	for (let k in text){
		for(let i in letters){
			if (i == text[k]){
				res += letters[i] + '|';
			}
		}
	}
	
	document.getElementById('result3').innerHTML = res;
}

function decrypt(){
	let text = document.getElementById('decrypt').value.split('|');
	let res = '';
	//let letters = {
	//'a': '. -', 
	//'b': '- . . .', 
	//'c': '- . - .', 
	//'d': '- . .', 
	//'e': '.', 
	//'f': '. . - .', 
	//'g': '- - .', 
	//'h': '. . . .',
	//'i': '. .', 
	//'j': '. - - -', 
	//'k': '- . -', 
	//'l': '. - . .', 
	//'m': '- -', 
	//'n': '- .', 
	//'o': '- - -', 
	//'p': '	. - - .', 
	//'q': '- - . -',
	//'r': '. - .', 
	//'s': '. . .', 
	//'t': '-', 
	//'u': '. . -', 
	//'v': '. . . -', 
	//'w': '. - -', 
	//'x': '- . - -', 
	//'y': '- . . -', 
	//'z': '- - . .',
	//};

		for (let k of text){
			for(let i in letters){
				if (letters[i] === k){
					res += i;
				}
			}
		}

	document.getElementById('result3').innerHTML = res;
}
