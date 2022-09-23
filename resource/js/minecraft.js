const mineOverworldMobs = [

    {nameEnglish: 'Allay', img: './assets/img/minecraft/overworld/allay2.gif', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Baby Drowned', img: './assets/img/minecraft/overworld/babyDrownedTrident.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'chicken Jockey - Zombie', img: './assets/img/minecraft/overworld/chickenJockey(Zombie).png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Creeper', img: './assets/img/minecraft/overworld/creeper.png', dataTheme:'minecraft', mineDimension: 'overworld'},
    
    {nameEnglish: 'Drowned', img: './assets/img/minecraft/overworld/drownedTrident.png', dataTheme:'minecraft', mineDimension: 'overworld'},
    
    {nameEnglish: 'Elder Guardian', img: './assets/img/minecraft/overworld/elderGuardian.gif', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Evoker', img: './assets/img/minecraft/overworld/evoker.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Husk', img: './assets/img/minecraft/overworld/husk.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Iron Golem', img: './assets/img/minecraft/overworld/ironGolem.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Pillager', img: './assets/img/minecraft/overworld/pillager.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Phantom', img: './assets/img/minecraft/overworld/phantom.gif', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Ravager', img: './assets/img/minecraft/overworld/ravager.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Sheared Snow Golem', img: './assets/img/minecraft/overworld/shearedSnowGolem.png', dataTheme:'minecraft', mineDimension: 'overworld'},
    
    {nameEnglish: 'Silverfish', img: './assets/img/minecraft/overworld/silverfish.gif', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Skeleton', img: './assets/img/minecraft/overworld/skeleton.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Snow Golem', img: './assets/img/minecraft/overworld/snowGolem.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Spider', img: './assets/img/minecraft/overworld/spider.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    {nameEnglish: 'Zombie', img: './assets/img/minecraft/overworld/zombie.png', dataTheme:'minecraft', mineDimension: 'overworld'},

    // {nameEnglish: '', img: './assets/img/minecraft/overworld/', dataTheme:'minecraft', mineDimension: 'overworld'},
]

const mineTheEnd = [

    {nameEnglish: 'Ender Dragon', img: './assets/img/minecraft/theEnd/enderDragon.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Shulker', img: './assets/img/minecraft/theEnd/shulker.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Enderman', img: './assets/img/minecraft/theEnd/enderman.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    // {nameEnglish: '', img: './assets/img/minecraft/theEnd/', dataTheme:'minecraft', mineDimension: 'theEnd'},
]

const mineNether = [

    {nameEnglish: 'Baby Hoglin', img: './assets/img/minecraft/nether/babyHoglin.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Blaze', img: './assets/img/minecraft/nether/blaze1.gif', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Chicken Jockey - Zombie Pigman', img: './assets/img/minecraft/nether/chickenJockey(ZombiePigman).png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Ghast', img: './assets/img/minecraft/nether/ghast.gif', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Hoglin', img: './assets/img/minecraft/nether/hoglin.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Magma Cube', img: './assets/img/minecraft/nether/magmaCube.png', dataTheme:'minecraft', mineDimension: 'theEnd'},

    {nameEnglish: 'Piglin', img: './assets/img/minecraft/nether/piglin.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Piglin Brute', img: './assets/img/minecraft/nether/piglinBrute.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Strider', img: './assets/img/minecraft/nether/strider.gif', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Whiter Boss', img: './assets/img/minecraft/nether/whiterBoss.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Wither Skeleton', img: './assets/img/minecraft/nether/witherSkeleton.png', dataTheme:'minecraft', mineDimension: 'nether'},

    {nameEnglish: 'Zombie Piglin', img: './assets/img/minecraft/nether/zombiePiglin.png', dataTheme:'minecraft', mineDimension: 'nether'},

    // {nameEnglish: '', img: './assets/img/minecraft/nether/', dataTheme:'minecraft', mineDimension: 'nether'},
]

const mineAllDimensions = [...mineOverworldMobs, ...mineNether, ...mineNether]

console.log(mineAllDimensions)