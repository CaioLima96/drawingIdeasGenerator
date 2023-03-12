//calls the json (that is hosted on firebase), and then returns the data according to the chosen theme
async function themesJsonFetch(theme) {

    let data = await fetch(`https://testeproj-27b0c-default-rtdb.firebaseio.com/all.json`).then(res => res.json())

    let allThemes = [
        ...data[0],
        ...data[1],
        ...data[2],
        ...data[3],
        {
            "name": "Dig",
            "img": "./assets/img/digFullBody.png",
            "dataSubTheme": "originalChar",
            "dataTheme": " "
        },
    ]


    // console.log("allThemes qtd: " + allThemes.length)
    // console.log("Animes qtd: " + data[0].length)
    // console.log("Ben 10 qtd: " + data[1].length)
    // console.log("Games qtd: " + data[2].length)
    // console.log("Objetos qtd: " + data[3].length)
    // console.log("Pokemon qtd: " + pokemon.length)


    if (theme === 'all') {

        return [...allThemes, ...await createPokemonArray()]

    } else if (theme === 'pokemon') {

        return await createPokemonArray()

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

        case 'allAnimes':

            temaArr = 0

            break

        case 'allGames':

            temaArr = 2

            break

        case 'allObjects':

            temaArr = 3

            break

        case 'ben10':

            temaArr = 1

            break

        case 'pokemon':

            temaArr = 'pokemon'

            break
    }

    return temaArr
}


//randomizes the data
function getMultipleRandom(arr, num) {

    // console.log(arr)
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}


//input mask
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            if (inputFilter(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                // this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {

                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    });
}
setInputFilter(document.getElementById("combNumber"),
    function (value) {
        return /^(?!(0))[0-9]*$/.test(value) && (value === "" || parseInt(value) <= 2000);
    }, "Must be between 1 and 800")


//stores the random data
async function randomData() {
    return getMultipleRandom(await themesJsonFetch(getThemeValue()), combNumber.value)
}


//renders the random data to the screen
async function setRandomTema() {

    document.getElementById('listMenu').style.display = 'flex'
    document.getElementById('ideasList').innerHTML = ` 
        <div class="loading">
            <div class='imgContainer'><img src='./assets/img/icons/loading2.svg' alt="Loading Icon"></div>
            <p>Loading...</p>
        </div>
    `

    let random = await randomData()
    // console.log(random)

    document.getElementById('ideasList').innerHTML = ' '

    for (let item of random) {
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea' ${item.dataSubTheme ? `dataSubTheme='${item.dataSubTheme}'` : `dataTheme='${item.dataTheme}'`} >
                    <p style='margin-bottom: 16px'>
                        ${item.name} 
                        ${item.title ? `(${item.title})` : ''}
                    </p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.name}'></div>
                </li>
            `
    }

    navTabBtns[0].classList.add('activeMenuBtn')
    navTabBtns[1].classList.remove('activeMenuBtn')
    gridView()
}

document.getElementById('generate').addEventListener('click', setRandomTema);