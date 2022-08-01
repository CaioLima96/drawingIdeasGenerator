const mineOverworldMobs = [

    {nome: 'Creeper', img: './assets/minecraft/overworld/creeper.png', mineDimension: 'overworld'},

    {nome: 'Skeleton', img: './assets/minecraft/overworld/skeleton.png', mineDimension: 'overworld'},

    {nome: 'Spider', img: './assets/minecraft/overworld/spider.png', mineDimension: 'overworld'},

    {nome: 'Zombie', img: './assets/minecraft/overworld/zombie.png', mineDimension: 'overworld'},

    // {nome: '', img: './assets/minecraft/overworld/', mineDimension: 'overworld'},
]

const mineTheEnd = [

    {nome: 'Ender Dragon', img: './assets/minecraft/theEnd/enderDragon.png', mineDimension: 'theEnd'},

    {nome: 'Shulker', img: './assets/minecraft/theEnd/shulker.png', mineDimension: 'theEnd'},

    // {nome: '', img: './assets/minecraft/theEnd/', mineDimension: 'theEnd'},
]

const mineNether = [

    {nome: 'Piglin', img: './assets/minecraft/nether/piglin.png', mineDimension: 'nether'},

    {nome: 'Zombie Piglin', img: './assets/minecraft/nether/zombiePiglin.png', mineDimension: 'nether'},

    {nome: 'Whiter Boss', img: './assets/minecraft/nether/whiterBoss.png', mineDimension: 'nether'},

    // {nome: '', img: './assets/minecraft/nether/', mineDimension: 'nether'},
]

const allDimensions = [...mineOverworldMobs, ...mineNether, ...mineNether]