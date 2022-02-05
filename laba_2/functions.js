function ob1(){
	var Person = {
		otv: '',
		user1: {
			'name': 'Сергей',
			'surname': 'Жуков',	
			'grants': 'получает',
		},
		user2: {
			'name': 'Светлана',
			'surname': 'Иванова',
			'grants': 'не получает'
		},
		user3: {
			'name': 'Мария',
			'surname': 'Борисова',
			'grants': 'получает'
		},
		user4: {
			'name': 'Евгений',
			'surname': 'Носов',
			'grants': 'не получает'
		},
		schet: function(){
			for (var key in Person) {
				if (Person[key].grants == 'получает') {
					Person.otv += "Имя: " + Person[key].name + '</br>';
					Person.otv += "Фамилия: " + Person[key].surname + '</br>';
					Person.otv += "Стипендия: " + Person[key].grants + '</br></br>';
				}						
			} 
			return this.otv;
		}
	}
	document.getElementById('result1').innerHTML = Person.schet();

	
	/*for (var key in Person) {
		if (Person[key].grants == 'получает') {
			otv += "Имя: " + Person[key].name + '</br>';
			otv += "Фамилия: " + Person[key].surname + '</br>';
			otv += "Стипендия: " + Person[key].grants + '</br></br>';
		}

		document.getElementById('result1').innerHTML = otv;
	}*/
}

function ob2(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);

	//var str = String(a);
	var g = a + b;
	
	var Step={
		str: String(g),
		sum: 0,
		otv: function (){
			for (var i of Step.str) {
				Step.sum += Number(i);
			}
			return this.sum;
		}
	}
	document.getElementById('result2').innerHTML = "Ответ: " + Step.otv();
}
