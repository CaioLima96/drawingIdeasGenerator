let ideasList = document.getElementById('ideasList')
let ideasListItens = document.getElementsByClassName('generatedIdea')
let disabledBtns = document.getElementById('listMenu').getElementsByClassName('listMenuBtn')



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

let ideasListImg = ideasList.getElementsByClassName('imgContainer')
let gridViewBtns = document.getElementById('gridViewBtn').getElementsByClassName("listMenuBtn");
let allbtn = document.getElementById('listMenu').getElementsByClassName("listMenuBtn");

function listView() {

	ideasList.classList.remove('gridView')
	ideasList.classList.add('listView')

	gridViewBtns[0].classList.remove('activeMenuBtn')
	gridViewBtns[1].classList.add('activeMenuBtn')

	for (let item of ideasListImg) {
		item.classList.remove('gridViewImg')
	}

	for (let i = 0; i < ideasListImg.length; i++) {

		if (ideasListImg[i].clientHeight > 500) {

			ideasListImg[i].setAttribute("style", "height:500px")

		}
	}
}

function gridView() {

	ideasList.classList.remove('listView')
	ideasList.classList.add('gridView')

	gridViewBtns[0].classList.add('activeMenuBtn')
	gridViewBtns[1].classList.remove('activeMenuBtn')

	for (let item of ideasListImg) {
		item.classList.add('gridViewImg')
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
