function ob1(){
	let a = parseInt(document.getElementById('a').value);
	let k = parseInt(document.getElementById('k').value);

	a^(1<<k);
	let b = a^(1<<k);

	document.getElementById('result1').innerHTML =  a.toString(2) + '<br>' + b.toString(2);
}




function ob2(){
	let a = parseInt(document.getElementById('b').value);
	let schet = 0;
	let len = a.toString(2).length;
	//let mask = 3;

	let mask,mask1,res,res1;

	for (let i = 1; i < len; i++){
		mask = 1 << i | 1 << i - 1;
		mask1 = mask.toString(2)
		res = a & mask;
		res1 = res.toString(2);
		if((res & mask) === mask){
			schet += 1;		
		}
	}
	document.getElementById('result2').innerHTML = schet;
}


function array(){
	let letters = {
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
	return letters
}
function crypt(letters){
	let text = document.getElementById('crypt').value.toLowerCase().split('');
	let res = '';
	let crypt_letters = array();
	
	for (let k in text){
		for(let i in crypt_letters){
			if (i == text[k]){
				res += crypt_letters[i] + '|';
			}
		}
	}
	
	document.getElementById('result3').innerHTML = res;
}

function decrypt(){
	let text = document.getElementById('decrypt').value.split('|');
	let res = '';
	let decrypt_letters = array();

		for (let k of text){
			for(let i in decrypt_letters){
				if (decrypt_letters[i] == k){
					res += i;
				}
			}
		}

	document.getElementById('result3').innerHTML = res;
}
