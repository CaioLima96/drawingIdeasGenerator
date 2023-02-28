//calls the json (that is hosted on firebase), and then returns the data according to the chosen theme
async function themesJsonFetch(theme) {
    let response = await fetch(`https://testeproj-27b0c-default-rtdb.firebaseio.com/all.json`);
    let data = await response.json();

    let allThemes = [
        ...data[0],
        ...data[1],
        ...data[2],
        ...data[3],
    ]

    // console.log("allThemes qtd: " + allThemes.length)
    // console.log("Animes qtd: " + data[0].length)
    // console.log("Ben 10 qtd: " + data[1].length)
    // console.log("Games qtd: " + data[2].length)
    // console.log("Objetos qtd: " + data[3].length)

    // console.log("tema: " + theme)

    if (theme === 'all') {

        return allThemes

    } else {

        return data[theme]

    }
}


//returns the chosen theme
function getThemeValue() {

    let temaArr;
    switch (themeSelector.value) {

        case 'allThemes':

            temaArr = 'all'

            break;

        case 'animes':

            temaArr = 0

            break

        case 'ben10':

            temaArr = 1

            break

        case 'games':

            temaArr = 2

            break

        case 'objects':

            temaArr = 3

            break
    }

    return temaArr
}


//randomizes the data
function getMultipleRandom(arr, num) {

    // console.log(arr)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    // console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}


//stores the random data
async function randomData() {
    return getMultipleRandom(await themesJsonFetch(getThemeValue()), combNumber.value)
}


//renders the random data to the screen
async function setRandomTema() {

    document.getElementById('listMenu').style.display = 'flex'
    document.getElementById('ideasList').innerHTML = ' '

    let random = await randomData()
    console.log(random)

    for (let item of random) {
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea' dataSubTheme='${item.dataSubTheme}'>
                    <p style='margin-bottom: 16px'>${item.name} ${item.dataTheme=='object' || item.dataSubTheme=='playstation' || item.dataTheme=='game' ? '' : `(${item.dataTheme})`} ${item.dataSubTheme=='minecraft' || item.dataSubTheme=='fortnite' ? `(${item.dataSubTheme})` : ''}</p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.name}'></div>
                </li>
            `

            // ${item.dataTheme=='object' || item.dataSubTheme=='playstation' || item.dataTheme=='game' ? '' : `(${item.dataTheme})`} 
            // ${item.dataSubTheme=='minecraft' || item.dataSubTheme=='fortnite' ? `(${item.dataSubTheme})` : ''}
    }

    btns[0].classList.add('activeMenuBtn')
    btns[1].classList.remove('activeMenuBtn')
    gridView()
}

document.getElementById('generate').addEventListener('click', setRandomTema);
