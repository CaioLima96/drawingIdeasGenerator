let ideasList = document.getElementById('ideasList')
let ideasListItens = document.getElementsByClassName('generatedIdea')
let ideasListImg = ideasList.getElementsByClassName('imgContainer')
let disabledBtns = document.getElementById('listMenu').getElementsByClassName('listMenuBtn')
let listMenuBtns = document.getElementById('listMenu').getElementsByClassName("listMenuBtn");



//====================== DARK MODE BTN

let darkModeBtn = document.getElementById('darkModeBtn')
let dmBtnText = darkModeBtn.getElementsByTagName('p')[0]

function darkModeFunc() {

	let element = document.body;
	element.classList.toggle("darkMode");
	darkModeBtn.getElementsByTagName('div')[0].classList.toggle('toggleSunMoon')

	if (dmBtnText.textContent == 'Dark Mode') {

		return dmBtnText.textContent = 'Light Mode'

	} else {

		return dmBtnText.textContent = 'Dark Mode'

	}
}
darkModeBtn.addEventListener('click', darkModeFunc)



//====================== RESPONSIVE MENU

let headerNavMenu = document.getElementById("headerNavMenu")

function myNavBar() {

	headerNavMenu.classList.toggle('hideShowHeaderNavMenu')
}

function closeNavBar() {

	headerNavMenu.classList.remove('hideShowHeaderNavMenu')
}



//====================== LIST/GRID VIEW

let gridViewBtns = document.getElementById('gridViewBtn').getElementsByClassName("listMenuBtn");


//When the user generates 2 or more ideas and immediately changes to listView, this function allows it to remove gridViewImg class just from ideasList div (if it has listView class). This will happen when ''setTimeout''(line 219 of global.js) reaches the it's limit.
function removeGridViewImg() {

	for (let iten of zoomBtn) {

		iten.classList.add('zoomListView')
	}

	let listViewZoomBtns = zoomBtns.getElementsByClassName('zoomListView')
	let listViewImg = document.getElementsByClassName('listView')[0].getElementsByClassName('imgContainer')

	for(let item of listViewZoomBtns) {

		if (item.classList.contains('zoomListView')) {
			for (let item of listViewImg) {
				item.classList.remove('gridViewImg')
			}
		}
	}
}

function listView() {

	ideasList.classList.remove('gridView')
	ideasList.classList.add('listView')

	gridViewBtns[0].classList.remove('activeMenuBtn')
	gridViewBtns[1].classList.add('activeMenuBtn')

	if (ideasList.classList.contains('listView')) {

		for (let btn of zoomBtn) {
			btn.addEventListener('click', removeGridViewImg)
		}
	}

	for (let i = 0; i < ideasListImg.length; i++) {

		ideasListImg[i].classList.remove('gridViewImg')
		// ideasListImg[i].setAttribute("style", "height:500px")

		if (ideasListImg[i].clientHeight > 500) {

			ideasListImg[i].classList.add('listViewImg')
		}
	}
}

function gridView() {

	ideasList.classList.remove('listView')
	ideasList.classList.add('gridView')

	gridViewBtns[0].classList.add('activeMenuBtn')
	gridViewBtns[1].classList.remove('activeMenuBtn')

	for (let iten of zoomBtn) {
		iten.classList.remove('zoomListView')
		iten.removeEventListener("click", removeGridViewImg)
	}

	for (let i = 0; i < ideasListImg.length; i++) {

		ideasListImg[i].classList.remove('listViewImg')

		if (ideasListImg[i].clientHeight > 350) {

			ideasListImg[i].classList.add('gridViewImg')
		}
	}
}



//====================== ZOOM

function zoomIn() {

	ideasList.style.zoom = "200%";
}

function zoomOut() {

	ideasList.style.zoom = "100%";
	ideasList.style.zoom = "60%";
}

function zoomReset() {

	ideasList.style.zoom = "100%";
}

document.getElementById('zoomIn').addEventListener('click', zoomIn)
document.getElementById('zoomOut').addEventListener('click', zoomOut)
document.getElementById('zoomReset').addEventListener('click', zoomReset)



//====================== NAV TAB ACTIVE

// Get the container element
let zoomBtns = document.getElementById('zoomBtns');

// Get all it's buttons
let zoomBtn = zoomBtns.getElementsByClassName("zoomBtn");


// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < zoomBtn.length; i++) {

	zoomBtn[i].addEventListener("click", function () {

		let currentBtn = zoomBtns.getElementsByClassName("activeMenuBtn");

		currentBtn[0].className = currentBtn[0].className.replace(" activeMenuBtn", "");
		this.className += " activeMenuBtn";

	});
}



//====================== MODAL

let modal = document.querySelector(".modal");

function openModal() {

	modal.style.display = "block"
	document.body.style.overflow = 'hidden'
	clonedElement()
}

function closeModal() {

	modal.style.display = "none";
	document.body.style.overflow = ''
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

	if (event.target == modal) {

		closeModal()
	}
}

//clones the list's item and renders in the modal
function clonedElement() {
	let ideasList = document.getElementById('ideasList')
	let containerList = document.getElementById('containerList')
	let clone = ideasList.cloneNode(true)
	document.getElementsByClassName('modalContent')[0].innerHTML = ''
	document.getElementsByClassName('modalContent')[0].appendChild(clone)
}



//====================== LOADING

//change loading img according to the selected theme
function loading(theme) {

	let loading = document.getElementsByClassName('loading')[0]

	let loadingImgContainer = loading.getElementsByClassName('imgContainer')[0]

	let loadingImg = loading.getElementsByClassName('imgContainer')[0].getElementsByTagName('img')[0]


	switch (theme) {

		case 0:

			loadingImgContainer.classList.add('rotate')
			loadingImg.src = './assets/img/icons/4StartDragonBall2.png'

			break

		case 2:

			loadingImgContainer.classList.add('noFilter')
			loadingImg.src = './assets/img/gif/pacagaio.gif'

			break

		case 1:

			loadingImgContainer.classList.add('rotate')
			loadingImg.src = './assets/img/icons/omnitrixSymbol.png'

			break

		case 'pokemon':

			loadingImgContainer.classList.add('noFilter')
			loading.style.width = 'auto'
			loadingImg.src = './assets/img/gif/redFRLG.png'

			break
	}
}



//====================== FORM

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => e.preventDefault())

let input = document.getElementById("combNumber");
input.addEventListener("keypress", function (event) {

	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("generate").click();
	}
});



//=========== BACK TO THE TOP BTN

//Get the button
let mybutton = document.getElementById("backToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}