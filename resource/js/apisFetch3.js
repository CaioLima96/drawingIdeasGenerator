async function pokeApiFetch() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=00&limit=10`);
    let data = await response.json();
    console.log(data.results[0].name, data.results[0].url)
    // createPokemon(data.results)
    return data.results
}


async function createPokemon() {

    let objPk = await pokeApiFetch()

    let pkInfo = objPk
    console.log(pkInfo)

    let response = []
    for (let i = 0; i < pkInfo.length; i++) {

        response.push(await fetch(`${pkInfo[i].url}`).then(response => response.json()))

    }
    console.log(response)

    let pkObj = []
    for (let item of response) {
        pkObj.push({name: `${item.name}`, id: `${item.id}`, img: `${item.sprites.front_default}`, img2: `${item['sprites']['other']['home']['front_default']}`})
    }
    console.log(pkObj)
    // for (let item of pkObj) {
    //     document.getElementById('ideasList').innerHTML += `
    
    //             <li class='generatedIdea'>
    //                 <p style='margin-bottom: 16px'>${item.name}</p>
    //                 <img src="${item.img2}" style="max-width: 300px">
    //             </li>
    //         `
    // }

    return pkObj
}


// let pokeArr = [...createPokemon()]
// console.log(pokeArr)

// async function pokeApi (pk) {
//     // console.log(pk)
//     // return await pk
//     return await createPokemon()
// }

// pokeApi()