// let themeSelector = document.getElementById('themeSelector')
let themedFieldSet = document.querySelectorAll('.themedFieldSet')


document.getElementById('themeSelector').addEventListener('change', () => {

	switch(document.getElementById('themeSelector').value) {
		

		case 'allThemes':
		
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				themedFieldSet[i].style.display = 'none'
			}
			
			break;

		case 'allAnime':

			document.getElementById('animesFieldSet').style.display = 'block'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[0]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;

		case 'ben10':

			document.getElementById('cartoonsFieldSet').style.display = 'block'
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[1]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;
		
		case 'allGames':
			
			document.getElementById('gamesFieldSet').style.display = 'block'
			document.getElementById('animesFieldSet').style.display = 'none'

			for (let i = 1; i < themedFieldSet.length; i++) {

				if (themedFieldSet[i] != themedFieldSet[2]) {

					themedFieldSet[i].style.display = 'none'
				}

			}

			break;

		case 'allObjects':
			
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