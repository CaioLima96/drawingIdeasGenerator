const allThemes = [...ben10AllThemes]

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
}

const randomData = getMultipleRandom(allThemes, 2)

function setRandomData(valorTeste) {

    console.log(valorTeste)
    return document.getElementById('random-name').innerHTML = `

        ${getMultipleRandom(allThemes, 2).map(item => {
            
            return `<li dataTheme='${item.dataTheme}'>
                <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
                <div class='imgContainer'><img src='${item.img}'></div>
                </li>
            `
        })}

    `

    // return document.getElementById('random-name').innerHTML = getMultipleRandom(allThemes, 2).forEach(item => {
    //     `
    //         <li dataTheme='${item.dataTheme}'>
    //             <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
    //             <img src='${item.img}'>
    //         </li>
    //     `
    // });
}

document.getElementById('generate').addEventListener('click', setRandomData);

// setRandomData()

// console.log(randomData)
// console.log(getMultipleRandom(allThemes, 2));