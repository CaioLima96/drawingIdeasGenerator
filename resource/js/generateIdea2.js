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
    }, "Must be between 1 and 200")


//stores the random data
async function randomData() {
    return getMultipleRandom(await themesJsonFetch(getThemeValue()), combNumber.value)
}

//renders the random data to the screen
async function setRandomTema() {

    document.getElementById('listMenu').style.display = 'flex'

    ideasList.innerHTML = ` 
        <div class="loading">
            <div class='imgContainer'><img src='./assets/img/icons/loading2.svg' alt="Loading Icon" class="loadCircle"></div>
            <p>Loading...</p>
        </div>
    `
    loading(getThemeValue())


    for (let el of listMenuBtns) el.classList.remove('activeMenuBtn')

    for (let el of disabledBtns) el.style.pointerEvents = "none"

    zoomReset()

    //randomized raw data
    let random = await randomData()


    ideasList.innerHTML = ' '

    listMenuBtns[5].classList.add('activeMenuBtn')

    for (let el of disabledBtns) el.style.pointerEvents = "all"


    for (let item of random) {
        ideasList.innerHTML += `
    
            <li class='generatedIdea' ${item.dataSubTheme ? `dataSubTheme='${item.dataSubTheme}'` : `dataTheme='${item.dataTheme}'`}>
                <p style='margin-bottom: 16px'>
                    ${item.name} 
                    ${item.title ? `(${item.title})` : ''}
                </p>
                <div class='imgContainer'><img src='${item.img}' alt=${item.name}'></div>
            </li>
        `
    }


    //apply list/grid view according to combination number, when generateBtn is clicked
    if (ideasListItens.length < 2) {

        listView()

        ideasListImg[0].classList.remove('gridViewImg')

        setInterval(() => {

            if (ideasListImg[0].clientHeight > 500) {

                ideasListImg[0].classList.add('listViewImg')
            }

        }, 0001)

    } else {

        gridView()

        for (let item of ideasListImg) {
            item.classList.remove('listViewImg')
        }

        let timerId = setInterval(() => {

            for (let i = 0; i < ideasListImg.length; i++) {

                if (ideasListImg[i].clientHeight > 350) {

                    ideasListImg[i].classList.add('gridViewImg')
                }
            }

        }, 0010);

        setTimeout(() => { clearInterval(timerId)}, 2000);
    }
}
document.getElementById('generate').addEventListener('click', setRandomTema)