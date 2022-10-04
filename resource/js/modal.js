// Get the modal
let modal = document.getElementById("myModal");

function openModal() {

	modal.style.display = "block"
	document.body.style.overflow = 'hidden'
	clonedElement()
	console.log('open')
}

function closeModal () {

	modal.style.display = "none";
	document.body.style.overflow = ''

	console.log('close')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

	if (event.target == modal) {

		closeModal()
	}
}




// ==============================================================



function clonedElement(){
	let ideasList = document.getElementById('ideasList')
	let containerList = document.getElementById('containerList')
	let clone = containerList.cloneNode(true)
	document.getElementsByClassName('modalContent')[0].innerHTML = ''
	document.getElementsByClassName('modalContent')[0].appendChild(clone)
}