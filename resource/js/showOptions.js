
let themeSelector = document.getElementById('themeSelector')
themeSelector.addEventListener('change', () => {

	if (themeSelector.value == 'allThemes') {

		document.getElementById('ben10Field').style.display = 'flex'
		document.getElementById('minecraftField').style.display = 'flex'

		console.log('testando todos')
	} 
	else if (themeSelector.value == 'ben10') {

		document.getElementById('ben10Field').style.display = 'flex'
		document.getElementById('minecraftField').style.display = 'none'

		console.log('testando ben')
	}
    else if (themeSelector.value == 'minecraft') {

		document.getElementById('ben10Field').style.display = 'none'
		document.getElementById('minecraftField').style.display = 'flex'

		console.log('testando mine')
	}
	
})

console.log(themeSelector)



/* ===================== BEN 10 ===================== */

let ben10FieldSet = document.getElementById('ben10Field') //pega o fieldset do desenho ben10

let ben10BenInputs = ben10FieldSet.getElementsByClassName('ben10InputBen') //pega inputs do char BEN10


//Select dos personagens de ben 10
let ben10Theme = document.getElementById('ben10chars')
ben10Theme.addEventListener('change', () => {

	if (ben10Theme.value == 'ben10Tennyson') {

        // ben10BenInputs.style.display = "flex";

        ben10FieldSet.querySelector('#'+'ben10BenInputsList').style.display = "flex";
        ben10FieldSet.querySelector('#'+'ben10GwenInputsList').style.display = "none";

        // for (let i = 0; i < ben10BenInputs.length; i += 1 ) {

        //     ben10BenInputs[i].style.display = "block";
        // }
	} 
	else if (ben10Theme.value == 'gwenTennyson') {

        ben10FieldSet.querySelector('#'+'ben10GwenInputsList').style.display = "flex";
        ben10FieldSet.querySelector('#'+'ben10BenInputsList').style.display = "none";
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