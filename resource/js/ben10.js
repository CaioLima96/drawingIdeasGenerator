const ben10PrimeOsAliens = ["4 Braços", "Áquatico", "Bala de Canhão"];

const ben10PrimeAfAliens = ["Alien X", "Arraia Jato", "Bebê Necrofriggiano"];

const ben10AllAliens = [...ben10PrimeOsAliens, ...ben10PrimeAfAliens]

const ben10PrimeClassicAliens = [

    // {namePtbr: '', nameEnglish: "", img:'./assets/ben10/aliens/benPrime/classico/', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: '4 Braços', nameEnglish: "Four Arms", img: './assets/img/ben10/aliens/benPrime/classico/4-bracos-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Aquático', nameEnglish: "Ripjaws", img:'./assets/img/ben10/aliens/benPrime/classico/aquatico-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Bala de Canhão', nameEnglish: "Cannonbolt", img:'./assets/img/ben10/aliens/benPrime/classico/bala-de-canhao-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Ben Múmia', nameEnglish: "Snare-oh", img:'./assets/img/ben10/aliens/benPrime/classico/ben-mumia-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Besta', nameEnglish: "Wildmutt", img:'./assets/img/ben10/aliens/benPrime/classico/besta-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Chama', nameEnglish: "Heatblast", img: './assets/img/ben10/aliens/benPrime/classico/chama-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Cipó Selvagem', nameEnglish: "Wildvine", img: './assets/img/ben10/aliens/benPrime/classico/cipo-selvagem-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Diamante', nameEnglish: "Diamondhead", img: './assets/img/ben10/aliens/benPrime/classico/diamante-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Ditto', nameEnglish: "Ditto", img:'./assets/img/ben10/aliens/benPrime/classico/ditto-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic' },

    {namePtbr: 'Fantasmático', nameEnglish: "Ghostfreak", img: './assets/img/ben10/aliens/benPrime/classico/fantasmatico-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Frankenstrike', nameEnglish: "Frankenstrike", img: './assets/img/ben10/aliens/benPrime/classico/frankenstrike-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Glutão (Perk)', nameEnglish: "Upchuck (Perk)", img: './assets/img/ben10/aliens/benPrime/classico/glutao-P-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Insectóide', nameEnglish: "Stinkfly", img: './assets/img/ben10/aliens/benPrime/classico/insectoide-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Lobisben', nameEnglish: "Blitzwolfer", img: './assets/img/ben10/aliens/benPrime/classico/lobisben-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Massa Cinzenta', nameEnglish: "Grey Matter", img: './assets/img/ben10/aliens/benPrime/classico/massa-cinzenta-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Mega Olhos', nameEnglish: "Eye Guy", img: './assets/img/ben10/aliens/benPrime/classico/mega-olhos-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Ultra T', nameEnglish: "Upgrade", img: './assets/img/ben10/aliens/benPrime/classico/ultra-t-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'Way Big', nameEnglish: "Way Big", img: './assets/img/ben10/aliens/benPrime/classico/waybig-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},

    {namePtbr: 'XLR8', nameEnglish: "XLR8", img: './assets/img/ben10/aliens/benPrime/classico/xlr8-(classico)-1.png', dataTheme: 'ben10', dataSeason: 'ben10Classic'},
]

const ben10AllThemes = [...ben10PrimeClassicAliens]

console.log(ben10AllThemes)

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
                <p style='margin-bottom: 16px'>${item.nameEnglish}</p>
                <img src='${item.img}'>
            </li>
        `
	}

    return document.getElementById('random-name').innerHTML = ben10PrimeClassicAliens.map(abc)
}

// document.getElementById('generate')
// 	.addEventListener('click', setRandomName);

// setRandomName();
