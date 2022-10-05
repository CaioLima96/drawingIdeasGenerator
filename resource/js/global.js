//================ DARK MODE BTN

function darkModeFunc() {
    let element = document.body;
    element.classList.toggle("darkMode");
    document.getElementById('darkModeBtn').classList.toggle('toggleSunMoon')
}

function snmn (){
    document.getElementById('darkModeBtn').classList.toggle('toggleSunMoon')
}


// const checkbox = document.getElementById('dmCheckbox');

// checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('darkMode');
// })



//================ RESPONSIVE MENU

let headerNavMenu = document.getElementById("headerNavMenu")

function myNavBar() {
	headerNavMenu.classList.toggle('hideShowHeaderNavMenu')
}

function closeNavBar() {
    headerNavMenu.classList.remove('hideShowHeaderNavMenu')
}



//================ LIST/GRID VIEW

let lista = document.getElementById('ideasList')
let listItens = document.getElementsByClassName("generatedIdea")
console.log(listItens)

// List View
function listView() {
    // for (let i = 0; i < listItens.length; i++) {
    //     listItens[i].style.width = "100%"
    //     listItens[i].style.maxWidth = "500px"
    // }
    lista.classList.remove('gridView')
    lista.classList.add('listView')
    console.log('lista')
}

// Grid View
function gridView() {
    // for (let i = 0; i < listItens.length; i++) {
    //     listItens[i].style.width = "50%";
    // }
    lista.classList.remove('listView')
    lista.classList.add('gridView')
    console.log('grid')
}



//=========== NAV TAB ACTIVE

// Get the container element
let btnContainer = document.getElementById('gridViewBtn');

// Get all buttons with class="listMenuBtn" inside the container
let btns = btnContainer.getElementsByClassName("listMenuBtn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {

	btns[i].addEventListener("click", function() {

		let currentBtn = document.getElementsByClassName("activeMenuBtn");
		
		currentBtn[0].className = currentBtn[0].className.replace(" activeMenuBtn", "");
		this.className += " activeMenuBtn";

	});
}