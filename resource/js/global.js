//====================== DARK MODE BTN

function darkModeFunc() {
    let element = document.body;
    element.classList.toggle("darkMode");
    document.getElementById('darkModeBtn').getElementsByTagName('div')[0].classList.toggle('toggleSunMoon')
}

// function snmn (){
//     document.getElementById('darkModeBtn').classList.toggle('toggleSunMoon')
// }



//====================== RESPONSIVE MENU

let headerNavMenu = document.getElementById("headerNavMenu")

function myNavBar() {
	headerNavMenu.classList.toggle('hideShowHeaderNavMenu')
}

function closeNavBar() {
    headerNavMenu.classList.remove('hideShowHeaderNavMenu')
}



//====================== LIST/GRID VIEW

let lista = document.getElementById('ideasList')
let listItens = document.getElementsByClassName("generatedIdea")
// console.log(listItens)

// List View
function listView() {
    // for (let i = 0; i < listItens.length; i++) {
    //     listItens[i].style.width = "100%"
    //     listItens[i].style.maxWidth = "500px"
    // }
    lista.classList.remove('gridView')
    lista.classList.add('listView')
    // console.log('lista')
}

// Grid View
function gridView() {
    // for (let i = 0; i < listItens.length; i++) {
    //     listItens[i].style.width = "50%";
    // }
    lista.classList.remove('listView')
    lista.classList.add('gridView')
    // console.log('grid')
}



//====================== NAV TAB ACTIVE

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



//====================== MODAL

let modal = document.getElementById("myModal");

function openModal() {

	modal.style.display = "block"
	document.body.style.overflow = 'hidden'
	clonedElement()
	// console.log('open')
}

function closeModal () {

	modal.style.display = "none";
	document.body.style.overflow = ''

	// console.log('close')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

	if (event.target == modal) {

		closeModal()
	}
}

//clones the list's item and renders in the modal
function clonedElement(){
	let ideasList = document.getElementById('ideasList')
	let containerList = document.getElementById('containerList')
	let clone = ideasList.cloneNode(true)
	document.getElementsByClassName('modalContent')[0].innerHTML = ''
	document.getElementsByClassName('modalContent')[0].appendChild(clone)
}