function f1(){
	let m = parseInt(document.getElementById('m').value);
	let res = '';
	let x = 1;
	let schet = 0;

	rec(m);
	function rec(m){
		if (schet == m){
			return res;
		}
		else{
			elem = 5 * (rec(x - 1)) + 1;
			schet += 1;
			res += elem + ',';
		}
		
	}

	document.getElementById('result1').innerHTML = res;
}

function f2(){
	let parentDiv = document.querySelector('.hl');
	let depth = 8;


	function randomCoord(min, max){
		return Math.round(min + (max - min) * Math.random());
	}

	
	function appendDiv(parentDiv, depth){
		if(depth != 0){
			//let rand = randomCoord(1, 100)
			let newElem = document.createElement('div');
			newElem.innerHTML = `<span style="margin-top: '${randomCoord(1, 100)}'px">Hello world!</span>`;
			parentDiv.insertAdjacentElement(
				'beforeend',
				newElem
			)
			appendDiv(parentDiv, depth - 1);


			//let childDiv = document.createElement('DIV');
			//childDiv.style.position = 'absolute';
			//childDiv.style.left = randomCoord(1, 500) + 'px';
			//childDiv.style.top = randomCoord(1, 200) + 'px';
			//parentDiv.appendChild(childDiv);
			//appendDiv(childDiv, depth, schet + 1);
			//schet += 1;
		}
	}

	appendDiv(parentDiv, depth)
}