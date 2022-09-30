//================ DARK MODE BTN

function darkModeFunc() {
    let element = document.body;
    element.classList.toggle("darkMode");
}


// const checkbox = document.getElementById('dmCheckbox');

// checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('darkMode');
// })



//================ LIST/GRID VIEW

let lista = document.getElementById('ideasList')
let listItens = document.getElementsByClassName("generatedIdea")
console.log(listItens)

// List View
function listView() {
    for (let i = 0; i < listItens.length; i++) {
        listItens[i].style.width = "500px"
        listItens[i].style.maxWidth = "100%"
    }
}

// Grid View
function gridView() {
    for (let i = 0; i < listItens.length; i++) {
        listItens[i].style.width = "50%";
    }
}