//calls the json (that is hosted on firebase), and then returns the data according to the chosen theme
async function themesJsonFetch(theme) {
    let response = await fetch(`https://testeproj-27b0c-default-rtdb.firebaseio.com/all.json`);
    let data = await response.json();

    let allThemes = [
        ...data[0],
        ...data[1],
        ...data[2],
        ...data[3],
        {
            "name": "Dig",
            "img": "./assets/img/digFullBody.png",
            "dataSubTheme": " ",
            "dataTheme": " "
        }
    ]

    console.log("allThemes qtd: " + allThemes.length)
    console.log("Animes qtd: " + data[0].length)
    console.log("Ben 10 qtd: " + data[1].length)
    console.log("Games qtd: " + data[2].length)
    console.log("Objetos qtd: " + data[3].length)

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
    return /^(?!(0))[0-9]*$/.test(value) && (value === "" || parseInt(value) <= 500);
},"Must be between 1 and 700")


//stores the random data
async function randomData() {
    return getMultipleRandom(await themesJsonFetch(getThemeValue()), combNumber.value)
}


//renders the random data to the screen
async function setRandomTema() {

    document.getElementById('listMenu').style.display = 'flex'
    document.getElementById('ideasList').innerHTML = ' '

    let random = await randomData()
    // console.log(random)

    for (let item of random) {
        document.getElementById('ideasList').innerHTML += `
    
                <li class='generatedIdea' dataSubTheme='${item.dataSubTheme}'>
                    <p style='margin-bottom: 16px'>
                        ${item.name} 
                        ${item.dataTheme == 'object' || item.dataTheme == 'animes' || item.dataTheme == 'game' || item.dataTheme == "ben10" || item.dataSubTheme == 'playstation' ? '' : `(${item.dataTheme})`} 
                        ${item.dataSubTheme == 'hungrySharkWorld' || item.dataSubTheme == 'minecraft' || item.dataSubTheme == 'fortnite' || item.dataSubTheme == 'angryBirds'  || item.dataTheme == 'animes' || item.dataTheme == "ben10" ? `(${item.dataSubTheme})` : ''}
                    </p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.name}'></div>
                </li>
            `
    }

    // console.log(`${combNumber.value > 364 ? 'maior' : 'menor'}`)

    navTabBtns[0].classList.add('activeMenuBtn')
    navTabBtns[1].classList.remove('activeMenuBtn')
    gridView()
}

document.getElementById('generate').addEventListener('click', setRandomTema);