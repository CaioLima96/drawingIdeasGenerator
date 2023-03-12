async function createPokemonArray() {

    //generate a random numbers array
    let randomNumArray = []
    for (let i = 0; i < combNumber.value; i++) { randomNumArray.push(Math.floor((Math.random() * 700) + 1)) }
    // console.log('randomNumArray: ', randomNumArray)


    //uses randomNumArray's values as pokemon's ID and do a fetch for all of them
    let pokeArr = []
    for (let i = 0; i < randomNumArray.length; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumArray[i]}/`)
            .then(res => res.json())
            .then(res => pokeArr.push(res))
    }
    // console.log('arrPokemon: ', pokeArr)


    //loops through pokeArr and create an object for each "raw" data
    let finalPokeArr = []
    for (let item of pokeArr) {
        finalPokeArr.push({
            name: `${item.name}`,
            img: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${item.id.toString().length < 2 ? `${'00'+item.id}` : item.id.toString().length < 3 ? `${'0'+item.id}` : item.id}.png`,
            title: "Pokémon",
            dataSubTheme: "pokemon",
            dataTheme: "game"
        })
    }
    console.log('finalPokeArr: ', finalPokeArr)
    return finalPokeArr
}