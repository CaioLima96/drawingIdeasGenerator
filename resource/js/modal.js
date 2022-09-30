// Get the modal
let modal = document.getElementById("myModal");

function openModal() {

	modal.style.display = "block";
	document.body.style.overflow = 'hidden'
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
	let clone = ideasList.cloneNode(true)
	document.getElementsByClassName('modalContent')[0].innerHTML = ''
	document.getElementsByClassName('modalContent')[0].appendChild(clone)
}