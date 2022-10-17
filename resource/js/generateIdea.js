const combNumber = document.getElementById('combNumber')

const allThemes = [
    ...allAnimes,
    // ...allObjects,
    // ...allGames,
    // ...ben10AllThemes,
]
console.log('All themes: ' + allThemes.length)

function getThemeValue (theme) {
    console.log('getThemeValue: ' + theme)

    switch(theme) {

        case 'allThemes':

            allThemes
            // [...allThemes]
            // getMultipleRandom(allThemes, combNumber.value)
            // randomData(allThemes)
            // setRandomData(allThemes)
            // console.log(allThemes)
            break;

        case 'animes':

            allAnimes
            // [...allAnimes]
            // getMultipleRandom(allAnimes, combNumber.value)
            // randomData(allAnimes)
            // setRandomData(allAnimes)
            // console.log(allAnimes)
            break

        case 'ben10':

            ben10AllThemes
            // [...ben10AllThemes]
            // getMultipleRandom(ben10AllThemes, combNumber.value)
            // randomData(ben10AllThemes)
            // setRandomData(ben10AllThemes)
            // console.log(ben10AllThemes)
            break
        
        case 'games':

            allGames
            // [...allGames]
            // getMultipleRandom(allGames, combNumber.value)
            // randomData(allGames)
            // setRandomData(allGames)
            // console.log(allGames)
            break
    }
}

// function getThemeValue (theme) {
//     console.log('getThemeValue: ' + theme)

//     if (theme == 'allThemes') {

//         return allThemes

//     } else if (theme == 'animes') {

//         return allAnimes

//     }
//     else if (theme == 'ben10') {

//         return ben10AllThemes

//     }
//     else if (theme == 'games') {
       
//         return allGames

//     }
// }

function getMultipleRandom(arr, num) {
    console.log(arr)
    console.log('comb num: ' + num)
    // let arrr = [...arr]
    // console.log(arrr)
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}

// let randomData = () => getMultipleRandom(getThemeValue(), combNumber.value)
// let randomData = () => getMultipleRandom()
let randomData = (themeArr) => getMultipleRandom(getThemeValue() ? getThemeValue() : allThemes, combNumber.value)
// let randomData = (themeArr) => {
//     console.log(themeArr)
// }



function setRandomData(valor) {
    // console.log(valor)

    // return document.getElementById('ideasList').innerHTML = `

    //     ${randomData().map(item => {

    //         return `<li dataTheme='${item.dataTheme}'>
    //             <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
    //             <div class='imgContainer'><img src='${item.img}'></div>
    //             </li>
    //         `
    //     })}

    // `

    document.getElementById('listMenu').style.display = 'flex'

    document.getElementById('ideasList').innerHTML = ' '

    randomData().forEach(item => {
       
        document.getElementById('ideasList').innerHTML += `

                <li class='generatedIdea' dataTheme='${item.dataTheme}'>
                    <p style='margin-bottom: 16px'>${item.nameEnglish} ${item.dataTheme=='object' ? '' : `(${item.dataTheme})`}</p>
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