let themeSelector = document.getElementById('themeSelector')
let themedFieldSet = document.querySelectorAll('.themedFieldSet')

themeSelector.addEventListener('change', () => {

	if (themeSelector.value == 'allThemes') {

		document.getElementById('ben10FieldSet').style.display = 'none'

		for (let i = 1; i < themedFieldSet.length; i++) {

			themedFieldSet[i].style.display = 'none'
		}

		console.log('testando todos')
	} 
	else if (themeSelector.value == 'ben10') {

		document.getElementById('ben10FieldSet').style.display = 'block'
		document.getElementById('minecraftFieldSet').style.display = 'none'

		console.log('testando ben')
	}
    else if (themeSelector.value == 'minecraft') {

		document.getElementById('ben10FieldSet').style.display = 'none'
		document.getElementById('minecraftFieldSet').style.display = 'block'

		console.log('testando mine')
	}
    else if (themeSelector.value == 'fortnite') {

		document.getElementById('fortniteFieldSet').style.display = 'block'

		console.log('testando fortnite')
	}
	
})

console.log(themeSelector)


/* ===================== BEN 10 ===================== */

let ben10FieldSet = document.getElementById('ben10FieldSet') //pega o fieldset do desenho ben10

let ben10BenInputs = ben10FieldSet.getElementsByClassName('ben10InputBen') //pega inputs do char BEN10


//Select dos personagens de ben 10
let ben10Theme = document.getElementById('ben10chars')
ben10Theme.addEventListener('change', () => {

	if (ben10Theme.value == 'ben10Tennyson') {

        // ben10BenInputs.style.display = "flex";

        ben10FieldSet.querySelector('#'+'ben10BenInputsList').style.display = "flex";

	}
	
})


//Seleciona só o Ben 10 e suas versões
let ben10Season = document.getElementById('ben10Season')
ben10chars.addEventListener('change', () => {
    
    if (ben10Season.value == 'ben10AllSeason') {

        for (let i = 0; i < ben10BenInputs.length; i += 1 ) {

            ben10BenInputs[i].style.display = "block";
        }
    }
})