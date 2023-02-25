// document.getElementById('ideasList').innerHTML = 'aaa'

// const url = 'http://localhost:3000/animes'

let dados;

async function fetchAsync (tema) {
    const url = `https://testeproj-27b0c-default-rtdb.firebaseio.com/${tema}.json`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return data
}

// fetchAsync('animes')

// async function teste(tema){
//     dados = await fetchAsync(tema)
//     dados.forEach(item => {
//         document.getElementById('ideasList').innerHTML += `
    
//                 <li class='generatedIdea' dataTheme='${item.nameEnglish}'>
//                     <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
//                 </li>
//             `
//     })
// }

let todosTemas = []

// async function teste(tema){
//     dados = await fetchAsync(tema)
//     console.log(dados)
//     // dados.push(dados)
//     return dados
// }

function getThemeValue (theme) {

    // console.log('getThemeValue: ' + theme)
    
    // let temaArr;
    switch(theme) {

        case 'animes':

        fetchAsync('animes')
            
            break

        case 'ben10':

        fetchAsync('ben10')
            
            break
    }

    // return temaArr
}

function getMultipleRandom(arr, num) {
    // console.log(arr)
    // console.log('comb num: ' + num)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    // console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}

let randomData = () => getMultipleRandom(getThemeValue(themeSelector.value), combNumber.value)

function setRandomTema() {

    randomData().forEach(item => {
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea' dataTheme='${item.nameEnglish}'>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
                </li>
            `
    })
}

// document.getElementById('generate').addEventListener('click', teste());
