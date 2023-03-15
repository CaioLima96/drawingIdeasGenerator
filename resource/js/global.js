let ideasList = document.getElementById('ideasList')
let ideasListItens = document.getElementsByClassName('generatedIdea')


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


//==== List View
function listView() {

	ideasList.classList.remove('gridView')
	ideasList.classList.add('listView')

	for (let i = 0; i < ideasListImg.length; i++) {

		if (ideasListImg[i].clientHeight > 500) {

			ideasListImg[i].setAttribute("style", "height:500px")

		}
	}
}



//==== Grid View
function gridView() {

	ideasList.classList.remove('listView')
	ideasList.classList.add('gridView')
}



//====================== NAV TAB ACTIVE

// Get the container element
let btnContainer = document.getElementById('gridViewBtn');

// Get all buttons with class="listMenuBtn" inside the container
let navTabBtns = btnContainer.getElementsByClassName("listMenuBtn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navTabBtns.length; i++) {

	navTabBtns[i].addEventListener("click", function () {

		let currentBtn = document.getElementsByClassName("activeMenuBtn");

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
