
const allThemess = [
    ...allAnimes,
    ...allObjects,
    ...allGames,
    ...ben10AllThemes,
]

function getThemeValue (theme) {

    console.log('getThemeValue: ' + theme)
    
    let temaArr;
    switch(theme) {

        case 'allThemes':

            temaArr = allThemess
            
            break;

        case 'animes':

            temaArr = allAnimes;
            
            break

        case 'ben10':

            temaArr = ben10AllThemes
            
            break
        
        case 'games':

            temaArr = allGames
            
            break
            
        case 'objects':

            temaArr = allObjects

            break
    }

    return temaArr
}

function getMultipleRandom(arr, num) {
    console.log(arr)
    console.log('comb num: ' + num)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}


let randomData = () => getMultipleRandom(getThemeValue(themeSelector.value), conbNumber.value)

function setRandomData(valor) {

    document.getElementById('listMenu').style.display = 'flex'

    document.getElementById('ideasList').innerHTML = ' '

    randomData().forEach(item => {
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
}

document.getElementById('generate').addEventListener('click', setRandomData)