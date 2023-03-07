async function pokeApiFetch(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    console.log(data)
    return data
}

// pokeApiFetch(25)

async function arrayPokemon(pokemon) {

    let data = await pokeApiFetch(pokemon)
    console.log(data)

    let pkObj = { name: `${data.name}`, id: data.id, img: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`, img2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`, img3: `${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}` }
    console.log(pkObj)

    // pkObj.forEach(element => {

    // });


    for (let item of pkObj) {
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea'>
                    <p style='margin-bottom: 16px'>${item.name}</p>
                </li>
            `
    }
}

arrayPokemon(25)