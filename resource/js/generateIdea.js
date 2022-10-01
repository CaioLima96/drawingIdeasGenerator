const allThemes = [
    ...allAnimes,
    ...allObjects,
    ...allGames,
    ...ben10AllThemes,
]
console.log('All themes: ' + allThemes.length)



function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

const combNumber = document.getElementById('combNumber')

let randomData = () => getMultipleRandom(allThemes, combNumber.value)



function setRandomData(valorTeste) {

    // return document.getElementById('ideasList').innerHTML = `

    //     ${randomData().map(item => {

    //         return `<li dataTheme='${item.dataTheme}'>
    //             <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
    //             <div class='imgContainer'><img src='${item.img}'></div>
    //             </li>
    //         `
    //     })}

    // `

    document.getElementById('listMenu').style.display = 'flex'

    document.getElementById('ideasList').innerHTML = ' '

    randomData().forEach(item => {
       
        document.getElementById('ideasList').innerHTML += `

                <li class='generatedIdea' dataTheme='${item.dataTheme}'>
                    <p style='margin-bottom: 16px'>${item.nameEnglish} ${item.dataTheme=='object' ? '' : `(${item.dataTheme})`}</p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
                </li>
            `
    })

    btns[0].classList.add('activeMenuBtn')
    btns[1].classList.remove('activeMenuBtn')
    gridView()
    clonedElement()

    // document.getElementById('ideasList').innerHTML = ' '

    // for (let i = 0; i < randomData().length; i++) {

    //     document.getElementById('ideasList').innerHTML += `
            
    //             <li dataTheme='${randomData()[i].nameEnglish}'>
    //                 <p style='margin-bottom: 16px'>${randomData()[i].nameEnglish}</p>
    //                 <div class='imgContainer'><img src='${randomData()[i].img}'></div>
    //             </li>
    //         `
    // }
}

document.getElementById('generate').addEventListener('click', setRandomData);

// setRandomData()