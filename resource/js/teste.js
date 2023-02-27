// document.getElementById('ideasList').innerHTML = 'aaa'

// const url = 'http://localhost:3000/animes'


// async function fetchAsync () {
//     const url = `http://localhost:3000/all`
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data[0])
//     return data[0]
// }

// async function teste(){
//     dados = await fetchAsync()
//     dados.forEach(item => {
//         document.getElementById('ideasList').innerHTML += `
    
//                 <li class='generatedIdea' dataTheme='${item.nameEnglish}'>
//                     <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
//                 </li>
//             `
//     })
// }
// teste()

let todosTemas = []


async function fetchAsync (tema) {
    let response = await fetch(`https://testeproj-27b0c-default-rtdb.firebaseio.com/all.json`);
    let data = await response.json();
    console.log(data[tema])
    return data[tema]
}


function getThemeValue (theme) {

    let temaArr;
    switch(themeSelector.value) {

        case 'animes':

            // temaArr = teste(0)
            console.log('tema: ' + themeSelector.value)
            temaArr = 0
            break

        case 'ben10':

            console.log('tema: ' + themeSelector.value)
            // temaArr = teste(1)
            temaArr = 1
            break
    }

    return temaArr
}

// async function teste(tema){
//     dados = await fetchAsync()
//     console.log(dados[tema])
//     return dados[tema]
// }

async function getMultipleRandom(arr, num) {

    console.log(arr)
    // let arrr = await arr
    // console.log(arrr)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}

async function randomData() {
    return getMultipleRandom(await fetchAsync(getThemeValue()), combNumber.value)
}

async function setRandomTema() {

    //  randomData().forEach(item => {
    //     document.getElementById('ideasList').innerHTML += `
    
    //             <li class='generatedIdea' dataTheme='${item.nameEnglish}'>
    //                 <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
    //             </li>
    //         `
    // })

    document.getElementById('listMenu').style.display = 'flex'

    document.getElementById('ideasList').innerHTML = ' '

    let random = await randomData()
    console.log(random)

    for (let i = 0; i < random.length; i++){
        
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea' dataTheme='${random.nameEnglish}'>
                    <div class='imgContainer'><img src='${random.img}' alt=${random.nameEnglish}'></div>
                </li>
            `
    
    }
}

// document.getElementById('generate').addEventListener('click', teste());
