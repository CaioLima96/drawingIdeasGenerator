let themeSelector = document.getElementById('themeSelector')
let themedFieldSet = document.querySelectorAll('.themedFieldSet')


themeSelector.addEventListener('change', () => {

	switch(themeSelector.value) {
		

		case 'allThemes':
		
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				themedFieldSet[i].style.display = 'none'
			}
			
			break;

		case 'animes':

			document.getElementById('animesFieldSet').style.display = 'block'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[0]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;

		case 'ben10':

			document.getElementById('ben10FieldSet').style.display = 'block'
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[1]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;
		
		case 'games':
			
			document.getElementById('gamesFieldSet').style.display = 'block'
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[2]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;

		case 'objects':
			
			document.getElementById('objectsFieldSet').style.display = 'block'
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[3]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;
	}
	
})



/* ===================== BEN 10 ===================== */

// let ben10FieldSet = document.getElementById('ben10FieldSet') //pega o fieldset do desenho ben10

// let ben10BenInputs = ben10FieldSet.getElementsByClassName('ben10InputBen') //pega inputs do char BEN10


// //Select dos personagens de ben 10
// let ben10Theme = document.getElementById('ben10chars')
// ben10Theme.addEventListener('change', () => {

// 	if (ben10Theme.value == 'ben10Tennyson') {

//         // ben10BenInputs.style.display = "flex";

//         ben10FieldSet.querySelector('#'+'ben10BenInputsList').style.display = "flex";

// 	}
	
// })


// //Seleciona só o Ben 10 e suas versões
// let ben10Season = document.getElementById('ben10Season')
// ben10chars.addEventListener('change', () => {
    
//     if (ben10Season.value == 'ben10AllSeason') {

//         for (let i = 0; i < ben10BenInputs.length; i += 1 ) {

//             ben10BenInputs[i].style.display = "block";
//         }
//     }
// })