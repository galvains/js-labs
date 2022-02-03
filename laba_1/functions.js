function ob1(){
	user1 = {};
	user1.name = 'Кошка';
	user1.surname = 'Альбертовна';
	user1.age = '3'

	document.getElementById('result1').innerHTML = 'Объект: '+ user1.name + ' ' + user1.surname + ' ' + 'возраст: '+ user1.age+' годиков';
}

function ob2(){
	function Person(name, surname, age){
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	user1 = new Person('Кошка', 'Альбертовна', '3');
	document.getElementById('result2').innerHTML = 'Объект: '+ user1.name + ' ' + user1.surname + ' ' + 'возраст: '+ user1.age+' годиков';
}

function ob3(){
	delete user1.surname;

	document.getElementById('result3').innerHTML = 'Объект ' + user1.name + ' ' + 'возраст: '+ user1.age+' годиков';
}

function ob4(){
	user1.color = 'зеленая';

	document.getElementById('result4').innerHTML = 'Объект ' + user1.name + ' ' + 'возраст: '+ user1.age+' годиков'+ ' ' + 'цвет: '+ user1.color;
	alert(showProps(user1, 'user1'));
}

function ob5(){

	document.getElementById('result5').innerHTML = showProps(user1, 'user1');
}

function showProps(obj, objName){	
	var result = '';
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			result += objName + '.' + i + '=' + obj[i] + '\n';
		}
	}
	return result;
}

function ob6(){
	var Person = {
		user1: {
			'name': 'кошка',
			'surname': 'Альбертовна',
			'age': '3',
			'color': 'зеленая',
			'photo': 'https://www.sb.by/upload/medialibrary/8d6/8d6af755bb33de571f6cb9bcd9ec9408.jpg'
		},
		user2: {
			'name': 'кошка',
			'surname': 'Ивановна',
			'age': '2',
			'color': 'серая',
			'photo': 'https://www.meme-arsenal.com/memes/b0aebb39fb569a290741c3191b570337.jpg'
		},
		user3: {
			'name': 'кошка',
			'surname': 'Борисовна',
			'age': '4',
			'color': 'черная',
			'photo': 'https://96.img.avito.st/640x480/447652196.jpg'
		}
	}

	var otv = '';
	for (var key in Person) {
		otv += "Имя: " + Person[key].name + '</br>';
		otv += "Фамилия: " + Person[key].surname + '</br>';
		otv += "Возраст: " + Person[key].age + '</br>';
		otv += "Цвет: " + Person[key].color + '</br>';
		otv += '<img src="' + Person[key].photo + '" class="img"><hr>' + '</р>';

		document.getElementById('result6').innerHTML = otv;
	}
}



