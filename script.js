var typingText = document.querySelector('.text2');
var myArray = 
["Student at TIU"]; 
var arrayIndex = 1;

let name = prompt("What's your name?");
if (!name || name.trim() === "") {
  name = "Guest";
}
const greetingEl = document.getElementById("greeting");
const currentHour = new Date().getHours();

let greetingMessage = "";
greetingMessage = `Welcome, ${name}!`;

greetingEl.textContent = greetingMessage;


function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){ //scroll over 80 px
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}