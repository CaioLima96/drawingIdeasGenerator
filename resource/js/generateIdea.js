const allThemes = [
    ...allAnimes,
    ...ben10AllThemes, 
    ...mineAllDimensions,
    ...fortniteAllSkins,
]
console.log('All themes: ' + allThemes.length)

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

const combNumber = document.getElementById('combNumber')

let randomData = () => getMultipleRandom(allThemes, combNumber.value)



function setRandomData(valorTeste) {

    // return document.getElementById('random-name').innerHTML = `

    //     ${randomData().map(item => {

    //         return `<li dataTheme='${item.dataTheme}'>
    //             <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
    //             <div class='imgContainer'><img src='${item.img}'></div>
    //             </li>
    //         `
    //     })}

    // `

    document.getElementById('random-name').innerHTML = ' '

    randomData().forEach(item => {
       
        document.getElementById('random-name').innerHTML += `

                <li dataTheme='${item.dataTheme}'>
                    <p style='margin-bottom: 16px'>${item.nameEnglish} ${item.dataTheme=='object' ? '' : `(${item.dataTheme})`}</p>
                    <div class='imgContainer'><img src='${item.img}' alt=${item.nameEnglish}'></div>
                </li>
            `
    })

    // document.getElementById('random-name').innerHTML = ' '

    // for (let i = 0; i < randomData().length; i++) {

    //     document.getElementById('random-name').innerHTML += `
            
    //             <li dataTheme='${randomData()[i].nameEnglish}'>
    //                 <p style='margin-bottom: 16px'>${randomData()[i].nameEnglish}</p>
    //                 <div class='imgContainer'><img src='${randomData()[i].img}'></div>
    //             </li>
    //         `
    // }
}

document.getElementById('generate').addEventListener('click', setRandomData);

// setRandomData()

// console.log(randomData)
// console.log(getMultipleRandom(allThemes, 2));