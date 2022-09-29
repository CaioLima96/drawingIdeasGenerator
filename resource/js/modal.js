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


	// Back to top when the modal is closed

	// const scrollY = document.body.style.top;
	// document.body.style.top = '';
	// window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

	if (event.target == modal) {

		closeModal()
	}
}




// ==============================================================

let ideasList = document.getElementById('ideasList').innerHTML
let modalContent = document.getElementsByClassName('modalContent')[0]


console.log(ideasList)
console.log(modalContent)