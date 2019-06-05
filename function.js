let score = 0; 

let div = document.createElement("div"); 
document.body.appendChild(div);
div.innerHTML = score;
div.style.position = "absolute";
div.style.left = '90%';
div.style.fontSize = "200%";
div.style.border = 'solid 1px';
div.style.width = '5%';
div.style.textAlign = 'center';


	
let person1=null;

function createPersonaj(url){
		person1  = document.createElement("div");
		document.body.appendChild(person1);
		person1.style.position = "absolute";
		person1.style.left=0+"%";
		person1.style.top=0+"%";
		person1.style.width=8 + "%";
		person1.style.height = 12 + "%";
		person1.style.backgroundImage = "url("+url+")";
		person1.style.backgroundSize="100% 100%";
	
};

let ae=null; 

function creatAnswer(){
		ae  = document.createElement("div");
		document.body.appendChild(ae);
		ae.style.position = "absolute";
		ae.style.left=10+"%";
		ae.style.top=60+"%";
		ae.style.width=13 + "%";
		ae.style.height = 23 + "%";
		ae.style.backgroundImage = "url(images/ae.jpg)";
		ae.style.backgroundSize="100% 100%";
		ae.style.zIndex = "-1";
	
};
creatAnswer()

function creatAnswer2(){
		ug  = document.createElement("div");
		document.body.appendChild(ug);
		ug.style.position = "absolute";
		ug.style.left=25+"%";
		ug.style.top=25+"%";
		ug.style.width=13 + "%";
		ug.style.height = 23 + "%";
		ug.style.backgroundImage = "url(images/ug.jpeg)";
		ug.style.backgroundSize="100% 100%";
		ug.style.zIndex = "-1";
	
};	
creatAnswer2()

function creatAnswer3(){
		eif  = document.createElement("div");
		document.body.appendChild(eif);
		eif.style.position = "absolute";
		eif.style.left=50+"%";
		eif.style.top=35+"%";
		eif.style.width=13 + "%";
		eif.style.height = 23 + "%";
		eif.style.backgroundImage = "url(images/eif.jpg)";
		eif.style.backgroundSize="100% 100%";
		eif.style.zIndex = "-1";
	
};	
creatAnswer3()

function creatAnswer4(){
		lotr  = document.createElement("div");
		document.body.appendChild(lotr);
		lotr.style.position = "absolute";
		lotr.style.left=35+"%";
		lotr.style.top=77+"%";
		lotr.style.width=13 + "%";
		lotr.style.height = 23 + "%";
		lotr.style.backgroundImage = "url(images/lotr.jpg)";
		lotr.style.backgroundSize="100% 100%";
		lotr.style.zIndex = "-1";
	
};	
creatAnswer4()

function creatAnswer5(){
		mv  = document.createElement("div");
		document.body.appendChild(mv);
		mv.style.position = "absolute";
		mv.style.left=60+"%";
		mv.style.top=77+"%";
		mv.style.width=13 + "%";
		mv.style.height = 23 + "%";
		mv.style.backgroundImage = "url(images/mv.jpg)";
		mv.style.backgroundSize="100% 100%";
		mv.style.zIndex = "-1";
	
};	
creatAnswer5()


function creatAnswer6(){
		piram  = document.createElement("div");
		document.body.appendChild(piram);
		piram.style.position = "absolute";
		piram.style.left=75+"%";
		piram.style.top=35+"%";
		piram.style.width=13 + "%";
		piram.style.height = 23 + "%";
		piram.style.backgroundImage = "url(images/piram.jpg)";
		piram.style.backgroundSize="100% 100%";
		piram.style.zIndex = "-1";
	
};	
creatAnswer6()

function creatAnswer7(){
		hr  = document.createElement("div");
		document.body.appendChild(hr);
		hr.style.position = "absolute";
		hr.style.left=85+"%";
		hr.style.top=70+"%";
		hr.style.width=13 + "%";
		hr.style.height = 23 + "%";
		hr.style.backgroundImage = "url(images/hr.jpg)";
		hr.style.backgroundSize="100% 100%";
		hr.style.zIndex = "-1";
	
};	
creatAnswer7()


//напр
let left=0;

function moveRight(){

	left = left+10
	person1.style.left=left + "%";
}
let down=0;

function moveDown(){

	down = down+10
	person1.style.top=down + "%";
}

function moveLeft(){

	left = left-10
	person1.style.left=left + "%";
}

function moveUp(){

	down = down-10
	person1.style.top=down + "%";
}



let check = false;
let timerId = setInterval(checkAnswer,1000);

function checkAnswer(){
	if(person1.style.top >= ae.style.top && person1.style.left >=ae.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(ae.style.height.split("%")[0]) + parseInt(ae.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(ae.style.width.split("%")[0]) + parseInt(ae.style.left.split("%")[0])){
			check = true;
			let answer = prompt("Назовите фамилию ученого, показавший язык?");
			if(answer=="Эйнштейн" || answer=='эйнштейн'){
			
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}




let timerId3 = setInterval(checkAnswer2,1000);

function checkAnswer2(){
	if(person1.style.top >= ug.style.top && person1.style.left >=ug.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(ug.style.height.split("%")[0]) + parseInt(ug.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(ug.style.width.split("%")[0]) + parseInt(ug.style.left.split("%")[0])){
			check = true;
			let answer = prompt("Как зовут первого человека в космосе? (имя и фамилия)");
			if(answer=="Юрий Гагарин" || answer=='юрий гагарин' || answer=='Юрий гагарин' || answer=='юрий Гагарин' ){
			alert("Правильно!");
			score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId3);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId4 = setInterval(checkAnswer3,1000);


function checkAnswer3(){
	if(person1.style.top >= eif.style.top && person1.style.left >=eif.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(eif.style.height.split("%")[0]) + parseInt(eif.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(eif.style.width.split("%")[0]) + parseInt(eif.style.left.split("%")[0])){
			check = true;
			let answer = prompt("Фамилия инженера главной башни Франции?");
			if(answer=="Эйфель" || answer=='эйфель'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId4);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}


let timerId5 = setInterval(checkAnswer4,1000);


function checkAnswer4(){
	if(person1.style.top >= lotr.style.top && person1.style.left >=lotr.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(lotr.style.height.split("%")[0]) + parseInt(lotr.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(lotr.style.width.split("%")[0]) + parseInt(lotr.style.left.split("%")[0])){
			check = true;
			let answer = prompt("Кто написал Властелин колец?(фамилия)");
			if(answer=="Толкин" || answer=='толкин'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId5);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId6 = setInterval(checkAnswer5,1000);


function checkAnswer5(){
	if(person1.style.top >= mv.style.top && person1.style.left >=mv.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(mv.style.height.split("%")[0]) + parseInt(mv.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(mv.style.width.split("%")[0]) + parseInt(mv.style.left.split("%")[0])){
			check = true;
			let answer = prompt("К какой вселенной комиксов относятся эти герои? (ответ на русском)");
			if(answer=="Марвел" || answer=='марвел'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId6);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}


let timerId7 = setInterval(checkAnswer7,1000);

function checkAnswer7(){
	if(person1.style.top >= piram.style.top && person1.style.left >=piram.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(piram.style.height.split("%")[0]) + parseInt(piram.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(piram.style.width.split("%")[0]) + parseInt(piram.style.left.split("%")[0])){
			check = true;
			let answer = prompt("В какой стране находятся пирамиды Хеопса?");
			if(answer=="Египет" || answer=='египет'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId7);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId8 = setInterval(checkAnswer8,1000);

function checkAnswer8(){
	if(person1.style.top >= hr.style.top && person1.style.left >=hr.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(hr.style.height.split("%")[0]) + parseInt(hr.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(hr.style.width.split("%")[0]) + parseInt(hr.style.left.split("%")[0])){
			check = true;
			let answer = prompt("Мифический герой, совершивший 12 подвигов");
			if(answer=="Геракл" || answer=='геракл' || answer=='геркулес'  || answer=='Геркулес'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			clearInterval(timerId8);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerScore = setInterval(checkScore,1000);

function checkScore(){
	if(score==70){
		alert("Ты выиграл");
		clearInterval(timerScore);

	}
}
let location_new;
function createLocation(url, x,y,){
		location_new  = document.createElement("div");
		document.body.appendChild(location_new);
		location_new.style.position = "absolute";
		location_new.style.left=x+"%";
		location_new.style.top=y+"%";
		location_new.style.width=13 + "%";
		location_new.style.height = 23 + "%";
		location_new.style.backgroundImage = "url("+url+")";
		location_new.style.backgroundSize="100% 100%";
		location_new.style.zIndex = "-1";


}
/*let timer_location= setInterval(checkVopros,1000);

let otvet1;
let vopros1;
function createVopros(question, otvet){
	otvet1 = otvet;
	vopros1 = question;
	
}

function checkVopros(){
	if(person1.style.top >= location_new.style.top && person1.style.left >=location_new.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(location_new.style.height.split("%")[0]) + parseInt(location_new.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(location_new.style.width.split("%")[0]) + parseInt(location_new.style.left.split("%")[0])){
			
			let answer = prompt(vopros1);
			if(answer==otvet1){
				alert("Правильно!");
				clearInterval(timer_location);
			
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}*//*
let timerId2 = setInterval(checkSchool,1000);

function checkSchool(){
	if(person1.style.top >= school.style.top && person1.style.left >=school.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(school.style.height.split("%")[0]) + parseInt(school.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(school.style.width.split("%")[0]) + parseInt(school.style.left.split("%")[0])){
			if (check==true) {
			alert("Я сыт и могу учиться!");
			clearInterval(timerId2);
		} else {
				alert("Я голодный, не могу учиться!");
					location.reload();
		}
	}else{
		
	}
}
*/


