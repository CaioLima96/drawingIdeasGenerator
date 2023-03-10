async function createPokemonArray() {

    //generate a random numbers array
    let randomNumArray = []
    for (let i = 0; i < combNumber.value; i++) { randomNumArray.push(Math.floor((Math.random() * 700) + 1)) }
    console.log('randomNumArray: ', randomNumArray)


    //uses randomNumArray values as pokemon's ID and do a fetch for all of them
    let pokeArr = []
    for (let i = 0; i < randomNumArray.length; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumArray[i]}/`)
            .then(res => res.json())
            .then(function (res) {
                pokeArr.push(res)

            })
    }
    console.log('arrPokemon: ', pokeArr)


    //loops through pokeArr and create an object for each "raw" data
    let finalPokeArr = []
    for (let item of pokeArr) {
        finalPokeArr.push({
            name: `${item.name}`,
            dataSubTheme: "pokemon",
            dataTheme: "game",
            img: `${item['sprites']['other']['dream_world']['front_default']}`
        })
    }

    return finalPokeArr
}


// let arrLength
// if (themeSelector.value === 'allThemes') {
//     arrLength = 5
// } else {
//     arrLength = combNumber.value
// }

// let randomNumArray = []
// for (let i = 0; i < 150; i++) { randomNumArray.push(Math.floor((Math.random() * 700) + 1)) }
// console.log('randomNumArray: ', randomNumArray)


// //uses randomNumArray values as pokemon's ID and do a fetch for all of them
// async function createPokemonArray() {
//     let pokeArr = []
//     for (let i = 0; i < randomNumArray.length; i++) {
//         await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumArray[i]}/`)
//             .then(res => res.json())
//             .then(res => pokeArr.push(res))
//     }
//     console.log('pokeArr: ', pokeArr)
//     return pokeArr
// }
// createPokemonArray()
//     .then(x => {
//         let testeA = []
//         for (let i = 0; i < x.length; i++) {
//             testeA.push({
//                 "name": `${x[i].name}`,
//                 "img": "./assets/img/digFullBody.png",
//                 "dataSubTheme": "originalChar",
//                 "dataTheme": " "
//             })
//         }
//         console.log('testeA: ', testeA)
//         allPokemons.push(...testeA)
//     })
//     .then(x => console.log('aaaa', x))


