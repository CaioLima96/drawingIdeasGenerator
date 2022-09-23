const mineOverworldMobs = [

    {nameEnglish: 'Creeper', img: './assets/img/minecraft/overworld/creeper.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Skeleton', img: './assets/img/minecraft/overworld/skeleton.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Spider', img: './assets/img/minecraft/overworld/spider.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Zombie', img: './assets/img/minecraft/overworld/zombie.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    // {nameEnglish: '', img: './assets/img/minecraft/overworld/', dataTheme:'minecraft', mineDimension: 'overworld'},
]

const mineTheEnd = [

    {nameEnglish: 'Ender Dragon', img: './assets/img/minecraft/theEnd/enderDragon.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Shulker', img: './assets/img/minecraft/theEnd/shulker.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    // {nameEnglish: '', img: './assets/img/minecraft/theEnd/', dataTheme:'minecraft', mineDimension: 'theEnd'},
]

const mineNether = [

    {nameEnglish: 'Piglin', img: './assets/img/minecraft/nether/piglin.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Zombie Piglin', img: './assets/img/minecraft/nether/zombiePiglin.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Whiter Boss', img: './assets/img/minecraft/nether/whiterBoss.png', dataTheme:'minecraft', mineDimension: 'nether'},

    // {nameEnglish: '', img: './assets/img/minecraft/nether/', dataTheme:'minecraft', mineDimension: 'nether'},
]

const mineAllDimensions = [...mineOverworldMobs, ...mineNether, ...mineNether]