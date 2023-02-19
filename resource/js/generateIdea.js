const combNumber = document.getElementById('combNumber')

const allThemess = [
    ...allAnimes,
    ...allObjects,
    ...allGames,
    ...ben10AllThemes,
]

// let Animes = [
//     ...allAnimes
// ]

// let Ben10 = [...ben10AllThemes]

function getThemeValue (theme) {
    console.log('getThemeValue: ' + theme)

    // // if (theme = 'allThemes') {

    // //     console.log('allthemes')
    // //     console.log('tema tipo: ' + typeof theme)
        
    // //     return allThemes

    // // } else 
    // if (theme == 'animes') {

    //     console.log('allAnimes')
    //     console.log('tema tipo: ' + typeof theme)

    //     return Animes

    // } else if (theme == 'ben10') {

    //     console.log('ben10AllThemes')
    //     console.log('tema tipo: ' + typeof theme)

    //     return Ben10
    

    // // } else if (theme = 'games') {

    // //     console.log('allGames')
    // //     console.log('tema tipo: ' + typeof theme)

    // //     return allGames

    // // } else if (theme = 'objects') {

    // //     console.log('allGames')
    // //     console.log('tema tipo: ' + typeof theme)

    // //     return allObjects

    // }
    
    let testTema;
    switch(theme) {

        case 'allThemes':

        testTema = allThemess
            // [...allThemes]
            // getMultipleRandom(allThemes, combNumber.value)
            // randomData(allThemes)
            // setRandomData(allThemes)
            // console.log(allThemes)
            break;

        case 'animes':

        testTema = allAnimes;
            // [...allAnimes]
            // getMultipleRandom(allAnimes, combNumber.value)
            // randomData(allAnimes)
            // setRandomData(allAnimes)
            // console.log(allAnimes)
            break

        case 'ben10':

        testTema = ben10AllThemes
            // [...ben10AllThemes]
            // getMultipleRandom(ben10AllThemes, combNumber.value)
            // randomData(ben10AllThemes)
            // setRandomData(ben10AllThemes)
            // console.log(ben10AllThemes)
            break
        
        case 'games':

        testTema = allGames
            // [...allGames]
            // getMultipleRandom(allGames, combNumber.value)
            // randomData(allGames)
            // setRandomData(allGames)
            // console.log(allGames)
            break
            
        case 'objects':

        testTema = allObjects
            // [...allGames]
            // getMultipleRandom(allGames, combNumber.value)
            // randomData(allGames)
            // setRandomData(allGames)
            // console.log(allGames)
            break
    }

    return testTema
}

// function getThemeValue(theme) {
//     console.log(theme)
//     // let tema = theme
//     // console.log(tema)
//     return theme
// }

// console.log(getThemeValue)

// let testTema;
// switch('allThemes') {

//     case 'allThemes':

//         testTema = allThemes
//         // [...allThemes]
//         // getMultipleRandom(allThemes, combNumber.value)
//         // randomData(allThemes)
//         // setRandomData(allThemes)
//         // console.log(allThemes)
//         break;

//     case 'animes':

//         testTema = allAnimes;
//         // [...allAnimes]
//         // getMultipleRandom(allAnimes, combNumber.value)
//         // randomData(allAnimes)
//         // setRandomData(allAnimes)
//         // console.log(allAnimes)
//         break

//     case 'ben10':

//     testTema = ben10AllThemes
//         // [...ben10AllThemes]
//         // getMultipleRandom(ben10AllThemes, combNumber.value)
//         // randomData(ben10AllThemes)
//         // setRandomData(ben10AllThemes)
//         // console.log(ben10AllThemes)
//         break
    
//     case 'games':

//     testTema = allGames
//         // [...allGames]
//         // getMultipleRandom(allGames, combNumber.value)
//         // randomData(allGames)
//         // setRandomData(allGames)
//         // console.log(allGames)
//         break
// }

// function teste () {
//     return allThemes
// }

// console.log(teste())


// themeSelector.addEventListener('change', () => {

// 	// let getThemeValue;
// 	switch(themeSelector.value) {
		

// 		case 'allThemes':

// 			getThemeValue(themeSelector.value)

// 			break;

// 		case 'animes':

// 			getThemeValue('animes')

// 			break;

// 		case 'ben10':

// 			getThemeValue(themeSelector.value)

// 			break;
		
// 		case 'games':

// 			getThemeValue(themeSelector.value)

// 			break;

// 		case 'objects':

// 			getThemeValue(themeSelector.value)

// 			break;
// 	}
	
// })


function getMultipleRandom(arr, num) {
    console.log(arr)
    console.log('comb num: ' + num)
    // let arrr = [...arr]
    // console.log(arrr)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    // let arrr = [...arr]
    // let shuffledd = arrr[Math.floor(Math.random() * arrr.length)];

    console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}


// let randomData = () => getMultipleRandom(getThemeValue(), combNumber.value)
// let randomData = () => getMultipleRandom()
let randomData = () => getMultipleRandom(getThemeValue(themeSelector.value), combNumber.value)
// let randomData = (themeArr) => getMultipleRandom(getThemeValue() ? getThemeValue() : allThemes, combNumber.value)
// let randomData = (themeArr) => {
//     console.log(themeArr)
// }


function setRandomData(valor) {
    // console.log(valor)

    // let cccc = () => {
    //     // return document.getElementById('ideasList').innerHTML = `

    // //     ${randomData().map(item => {

    // //         return `<li dataTheme='${item.dataTheme}'>
    // //             <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
    // //             <div class='imgContainer'><img src='${item.img}'></div>
    // //             </li>
    // //         `
    // //     })}

    // // `
    // }

    document.getElementById('listMenu').style.display = 'flex'

    document.getElementById('ideasList').innerHTML = ' '

    randomData().forEach(item => {
        // ${item.dataTheme=='object' ? '' : `(${item.dataTheme})`}
        // ${dataThemeChecker() ? '' : `(${item.dataTheme})`}
        console.log(item['dataTheme'])
        document.getElementById('ideasList').innerHTML += `

                <li class='generatedIdea' dataTheme='${item.dataTheme}'>
                    <p style='margin-bottom: 16px'>${item.nameEnglish} ${item.dataTheme=='object' || item.dataTheme=='playstation' ? '' : `(${item.dataTheme})`}</p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
                </li>
            `
    })
 
    btns[0].classList.add('activeMenuBtn')
    btns[1].classList.remove('activeMenuBtn')
    gridView()
    // clonedElement()

    // document.getElementById('ideasList').innerHTML = ' '

    // for (let i = 0; i < randomData().length; i++) {

    //     document.getElementById('ideasList').innerHTML += `
            
    //             <li dataTheme='${randomData()[i].nameEnglish}'>
    //                 <p style='margin-bottom: 16px'>${randomData()[i].nameEnglish}</p>
    //                 <div class='imgContainer'><img src='${randomData()[i].img}'></div>
    //             </li>
    //         `
    // }
}

document.getElementById('generate').addEventListener('click', setRandomData);

// setRandomData()

// let ccccc = () => {
//       // if (theme = 'allThemes') {

//     //     console.log('allthemes')
//     //     console.log('tema tipo: ' + typeof theme)
        
//     //     return allThemes

//     // } else if (theme = 'animes') {

//     //     console.log('allAnimes')
//     //     console.log('tema tipo: ' + typeof theme)

//     //     return allAnimes

//     // } else if (theme = 'ben10') {

//     //     console.log('ben10AllThemes')
//     //     console.log('tema tipo: ' + typeof theme)

//     //     return ben10AllThemes

//     // } else if (theme = 'games') {

//     //     console.log('allGames')
//     //     console.log('tema tipo: ' + typeof theme)

//     //     return allGames

//     // } else if (theme = 'objects') {

//     //     console.log('allGames')
//     //     console.log('tema tipo: ' + typeof theme)

//     //     return allObjects

//     // }
// }