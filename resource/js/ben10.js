const ben10PrimeOsAliens = ["4 Braços", "Áquatico", "Bala de Canhão"];

const ben10PrimeAfAliens = ["Alien X", "Arraia Jato", "Bebê Necrofriggiano"];

const ben10AllAliens = [...ben10PrimeOsAliens, ...ben10PrimeAfAliens]

const ben10PrimeClassicAliens = [

    // {namePtbr: '', nameEnglish: "", img:'./assets/ben10/aliens/benPrime/classico/', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: '4 Braços', nameEnglish: "Four Arms", img: './assets/img/ben10/aliens/benPrime/classico/4-bracos-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Aquático', nameEnglish: "Ripjaws", img:'./assets/img/ben10/aliens/benPrime/classico/aquatico-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    // {namePtbr: 'Bala de Canhão', nameEnglish: "Cannonbolt", img:'./assets/img/ben10/aliens/benPrime/classico/bala-de-canhao-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic', teste:"teste"},

    // {namePtbr: 'Ben Múmia', nameEnglish: "Snare-oh", img:'./assets/img/ben10/aliens/benPrime/classico/ben-mumia-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    // {nomePtbr: 'Besta', nomeIngles: "Wildmutt", seasonName: 'primeBenOsWildMutt', wikiUrl: 'https://ben10.fandom.com/wiki/Wildmutt', imgOs: ['./assets/img/aliens/ben-prime/classico/besta-(classico)-2.png', './assets/img/aliens/ben-prime/classico/besta-(classico)-3.png', './assets/img/aliens/ben-prime/classico/besta-(classico)-4.png', './assets/img/aliens/ben-prime/classico/besta-(classico)-5.png', './assets/img/aliens/ben-prime/classico/besta-(classico)-6.png']},

    // {nomePtbr: 'Chama', nomeIngles: "Heatblast", seasonName: 'primeBenOsHeatBlast', wikiUrl: 'https://ben10.fandom.com/wiki/Heatblast_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/chama-(classico)-1.png', './assets/img/aliens/ben-prime/classico/chama-(classico)-2.png', './assets/img/aliens/ben-prime/classico/chama-(classico)-3.png', './assets/img/aliens/ben-prime/classico/chama-(classico)-4.png', './assets/img/aliens/ben-prime/classico/chama-(classico)-5.png']},

    // {nomePtbr: 'Cipó Selvagem', nomeIngles: "Wildvine", seasonName: 'primeBenOsWildvine', wikiUrl: 'https://ben10.fandom.com/wiki/Wildvine_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/cipo-selvagem-(classico)-1.png', './assets/img/aliens/ben-prime/classico/cipo-selvagem-(classico)-2.png', './assets/img/aliens/ben-prime/classico/cipo-selvagem-(classico)-3.png']},

    // {nomePtbr: 'Diamante', nomeIngles: "Diamondhead", seasonName: 'primeBenOsDiamondHead', wikiUrl: 'https://ben10.fandom.com/wiki/Diamondhead_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/diamante-(classico)-1.png', './assets/img/aliens/ben-prime/classico/diamante-(classico)-2.png', './assets/img/aliens/ben-prime/classico/diamante-(classico)-3.png', './assets/img/aliens/ben-prime/classico/diamante-(classico)-4.png', './assets/img/aliens/ben-prime/classico/diamante-(classico)-5.png', './assets/img/aliens/ben-prime/classico/diamante-(classico)-6.png']},

    // {nomePtbr: 'Ditto', nomeIngles: "Ditto", seasonName: 'primeBenOsDitto', wikiUrl: 'https://ben10.fandom.com/wiki/Ditto', imgOs: ['./assets/img/aliens/ben-prime/classico/ditto-(classico)-1.png', './assets/img/aliens/ben-prime/classico/ditto-(classico)-2.jpg', './assets/img/aliens/ben-prime/classico/ditto-(classico)-3.png']},

    // {nomePtbr: 'Fantasmático', nomeIngles: "Ghostfreak", seasonName: 'primeBenOsGhostFreak', wikiUrl: 'https://ben10.fandom.com/wiki/Ghostfreak', imgOs: ['./assets/img/aliens/ben-prime/classico/fantasmatico-(classico)-1.png', './assets/img/aliens/ben-prime/classico/fantasmatico-(classico)-2.png', './assets/img/aliens/ben-prime/classico/fantasmatico-(classico)-3.png', './assets/img/aliens/ben-prime/classico/fantasmatico-(classico)-4.png', './assets/img/aliens/ben-prime/classico/fantasmatico-(classico)-5.jpg']},

    // {nomePtbr: 'Frankenstrike', nomeIngles: "Frankenstrike", seasonName: 'primeBenOsFrankenstrike', wikiUrl: 'https://ben10.fandom.com/wiki/Frankenstrike', imgOs: ['./assets/img/aliens/ben-prime/classico/frankenstrike-(classico)-1.png', './assets/img/aliens/ben-prime/classico/frankenstrike-(classico)-2.png', './assets/img/aliens/ben-prime/classico/frankenstrike-(classico)-3.jpg', './assets/img/aliens/ben-prime/classico/frankenstrike-(classico)-4.png']},

    // {nomePtbr: 'Glutão (Perk)', nomeIngles: "Upchuck (Perk)", seasonName: 'primeBenOsUpChuckP', wikiUrl: 'https://ben10.fandom.com/wiki/Upchuck', imgOs: ['./assets/img/aliens/ben-prime/classico/glutao-P-(classico)-1.png', './assets/img/aliens/ben-prime/classico/glutao-P-(classico)-2.png', './assets/img/aliens/ben-prime/classico/glutao-P-(classico)-3.png', './assets/img/aliens/ben-prime/classico/glutao-P-(classico)-4.png', './assets/img/aliens/ben-prime/classico/glutao-P-(classico)-5.png']},

    // {nomePtbr: 'Insectóide', nomeIngles: "Stinkfly", seasonName: 'primeBenOsStinkFly', wikiUrl: 'https://ben10.fandom.com/wiki/Stinkfly_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/insectoide-(classico)-1.png', './assets/img/aliens/ben-prime/classico/insectoide-(classico)-2.png', './assets/img/aliens/ben-prime/classico/insectoide-(classico)-3.png', './assets/img/aliens/ben-prime/classico/insectoide-(classico)-4.png', './assets/img/aliens/ben-prime/classico/insectoide-(classico)-5.png']},

    // {nomePtbr: 'Lobisben', nomeIngles: "Blitzwolfer", seasonName: 'primeBenOsBlitzWolfer', wikiUrl: 'https://ben10.fandom.com/wiki/Blitzwolfer', imgOs: ['./assets/img/aliens/ben-prime/classico/lobisben-(classico)-1.png', './assets/img/aliens/ben-prime/classico/lobisben-(classico)-2.png', './assets/img/aliens/ben-prime/classico/lobisben-(classico)-3.png', './assets/img/aliens/ben-prime/classico/lobisben-(classico)-4.png', './assets/img/aliens/ben-prime/classico/lobisben-(classico)-5.png']},

    // {nomePtbr: 'Massa Cinzenta', nomeIngles: "Grey Matter", seasonName: 'primeBenOsGreyMatter', wikiUrl: 'https://ben10.fandom.com/wiki/Grey_Matter_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/massa-cinzenta-(classico)-1.png', './assets/img/aliens/ben-prime/classico/massa-cinzenta-(classico)-2.png', './assets/img/aliens/ben-prime/classico/massa-cinzenta-(classico)-3.png', './assets/img/aliens/ben-prime/classico/massa-cinzenta-(classico)-4.png', './assets/img/aliens/ben-prime/classico/massa-cinzenta-(classico)-5.png']},

    // {nomePtbr: 'Mega Olhos', nomeIngles: "Eye Guy", seasonName: 'primeBenOsEyeGuy', wikiUrl: 'https://ben10.fandom.com/wiki/Eye_Guy', imgOs: ['./assets/img/aliens/ben-prime/classico/mega-olhos-(classico)-1.png', './assets/img/aliens/ben-prime/classico/mega-olhos-(classico)-2.png', './assets/img/aliens/ben-prime/classico/mega-olhos-(classico)-3.png', './assets/img/aliens/ben-prime/classico/mega-olhos-(classico)-4.png', './assets/img/aliens/ben-prime/classico/mega-olhos-(classico)-5.png']},

    // {nomePtbr: 'Ultra T', nomeIngles: "Upgrade", seasonName: 'primeBenOsUpgrade', wikiUrl: 'https://ben10.fandom.com/wiki/Upgrade_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/ultra-t-(classico)-1.png', './assets/img/aliens/ben-prime/classico/ultra-t-(classico)-2.png', './assets/img/aliens/ben-prime/classico/ultra-t-(classico)-3.png', './assets/img/aliens/ben-prime/classico/ultra-t-(classico)-4.png']},

    // {nomePtbr: 'Way Big', nomeIngles: "Way Big", seasonName: 'primeBenOsWayBig', wikiUrl: 'https://ben10.fandom.com/wiki/Way_Big_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/waybig-(classico)-1.png', './assets/img/aliens/ben-prime/classico/waybig-(classico)-2.png', './assets/img/aliens/ben-prime/classico/waybig-(classico)-3.png']},

    // {nomePtbr: 'XLR8', nomeIngles: "XLR8", seasonName: 'primeBenOsXlr8', wikiUrl: 'https://ben10.fandom.com/wiki/XLR8_(Classic)', imgOs: ['./assets/img/aliens/ben-prime/classico/xlr8-(classico)-1.png', './assets/img/aliens/ben-prime/classico/xlr8-(classico)-2.png', './assets/img/aliens/ben-prime/classico/xlr8-(classico)-3.png', './assets/img/aliens/ben-prime/classico/xlr8-(classico)-4.png', './assets/img/aliens/ben-prime/classico/xlr8-(classico)-5.png']},

    // {nomePtbr: '', nomeIngles: "", seasonName: 'primeBenOs', wikiUrl: '', imgOs: ['./assets/img/aliens/ben-prime/classico/']},
]

const getRandomNumber = (max) => Math.floor(Math.random() * max);

// const getRandomName = () => `${ben10AllAliens[getRandomNumber(ben10AllAliens.length)]} ${ben10AllAliens[getRandomNumber(ben10AllAliens.length)]}`;

const getRandomName = () => `${ben10PrimeClassicAliens[getRandomNumber(ben10PrimeClassicAliens.length)]} ${ben10PrimeClassicAliens[getRandomNumber(ben10PrimeClassicAliens.length)]}`;

// const getRandomName = (item) => `

//     <li dataTheme='${item.dataTheme}'>
//                 <img src='${item.img}'>
//                 <p>${item.nameEnglish}</p>
//     </li>

//     <li dataTheme='${item.dataTheme}'>
//                 <img src='${item.img}'>
//                 <p>${item.nameEnglish}</p>
//     </li>


// `;

const setRandomName = () => {
	// document.getElementById('random-name').innerText = getRandomName();

	// getRandomName().array.forEach(element => {
		
	// });

    // let teste = getRandomName()
    // console.log('obj: ' + teste)
		
	let abc = (item) => {
		
        return `
            <li dataTheme='${item.dataTheme}'>
                <img src='${item.img}'>
                <p>${item.nameEnglish}</p>
            </li>
        `
	}

    return document.getElementById('random-name').innerHTML = ben10PrimeClassicAliens.map(abc)
}

document.getElementById('generate')
	.addEventListener('click', setRandomName);

setRandomName();