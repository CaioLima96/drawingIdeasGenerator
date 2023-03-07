async function pokeApiFetch() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=00&limit=150`);
    let data = await response.json();
    console.log(data.results[0].name)
    return data.results
}
// pokeApiFetch()

function getMultiple(arr, num) {

    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    console.log(shuffled.slice(0, num))

    return shuffled.slice(0, num);
}

async function random () {
    return getMultiple(await pokeApiFetch(), combNumber.value)
}

async function pokeSET() {

    let dataRandom = await random()

    for (let item of dataRandom) {
    document.getElementById('ideasList').innerHTML += `

            <li class='generatedIdea'>
                <p style='margin-bottom: 16px'>${item.name}</p>
            </li>
        `
    }
}
pokeSET()