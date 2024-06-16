let wood = 10000;
let currentMultiplier = 0;

let clickUpgrades = [
    {
      name: 'sharpAxe',
      price: 50,
      quantity: 0,
      multiplier: 1
    }, 
    {
        name: 'chainsaw',
        price: 500,
        quantity: 0,
        multiplier: 5
    }
  ];
  
  let autoUpgrades = [
    {
      name: 'lumberjack',
      price: 2000,
      quantity: 0,
      multiplier: 20
    },
    {
      name: 'loggingCamp',
      price: 20000, 
      quantity: 0,
      multiplier: 100
    }
  ];

//ANCHOR Click Functions 

function logging() {
    // ✅ console.log('does this work', wood)
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')
    wood += 1 + (sharpAxe.quantity * sharpAxe.multiplier) + (chainsaw.quantity * chainsaw.multiplier)
    drawWoodCounter()
}

function autoLogging() {
    // ✅ console.log('does this work', wood)
    // autoLogging works automatically at a setInterval
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')
    wood += (lumberjack.quantity * lumberjack.multiplier) + (loggingCamp.quantity * loggingCamp.multiplier)
    drawWoodCounter()
}

//ANCHOR Draw Functions

function drawWoodCounter() {
    const woodCounterElem = document.getElementById('woodCount')
    woodCounterElem.innerText = wood
    // console.log('does this show up on the page?', wood)
}

function drawWoodPerClick() {
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')
    let woodPerClick = 1 + (sharpAxe.quantity * sharpAxe.multiplier) + (chainsaw.quantity * chainsaw.multiplier)

    const woodPerClickElem = document.getElementById('woodPerClick')
    woodPerClickElem.innerText = woodPerClick
   // ✅ console.log('does this show up on the page?', wood)
}

function drawWoodPerSecond() {
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')
    let woodPerSecond = (lumberjack.quantity * lumberjack.multiplier) + (loggingCamp.quantity * loggingCamp.multiplier)
   
    const woodPerSecondElem = document.getElementById('woodPerSecond')
    woodPerSecondElem.innerText = woodPerSecond
   // ✅ console.log('does this show up on the page?', wood)
}

//TODO Refactor Draw Buttons

function drawClickUpgrades() {
    clickUpgrades.forEach((clickUpgrade) => {
        // console.log(`step 1`, clickUpgrade.name)
        const clickUpgradeElem = document.getElementById(clickUpgrade.name)
        // console.log(`step 2`, clickUpgradeElem)
        clickUpgradeElem.innerText = `${clickUpgrade.price}`
        // console.log(`did it work??`)
    })
}

function drawAutoUpgrades () {
    autoUpgrades.forEach((autoUpgrade) => {
        const autoUpgradeElem = document.getElementById(autoUpgrade.name)
        console.log(`Is it working?`, autoUpgradeElem)
        autoUpgradeElem.innerText = `${autoUpgrade.price}`
    })
}

/* function drawSharpAxe() {
    const sharpAxeElem = document.getElementById('purchaseAxe')
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')

    sharpAxeElem.innerText = sharpAxe.price
}

function drawChainsaw() {
    const chainsawElem = document.getElementById('purchaseChainsaw')
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')

    chainsawElem.innerText = chainsaw.price
}

function drawLumberjack() {
    const lumberjackElem = document.getElementById('purchaseLumberjack')
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')

    lumberjackElem.innerText = lumberjack.price
}

function drawLoggingCamp() {
    const loggingCampElem = document.getElementById('purchaseLoggingCamp')
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')

    loggingCampElem.innerText = loggingCamp.price
}
*/ 

function drawUpgradesPurchased () {
    const sharpAxeElem = document.getElementById('sharpAxes')
    const chainsawElem = document.getElementById('chainsaws')
    const lumberjackElem = document.getElementById('lumberjacks')
    const loggingCampElem = document.getElementById('loggingCamps')

    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')

    // Show the purchased upgrades to the user
    sharpAxeElem.innerText = sharpAxe.quantity
    chainsawElem.innerText = chainsaw.quantity
    lumberjackElem.innerText = lumberjack.quantity
    loggingCampElem.innerText = loggingCamp.quantity
}

//ANCHOR Buying Functions

function buySharpAxe() {
    // ✅ find the sharpAxe in the array
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')
    // ✅ Increase the quantity of the sharpAxe
    // ✅ Only if the user has enough wood to make the purchase
    if (wood >= sharpAxe.price) {
        sharpAxe.quantity++
        wood -= sharpAxe.price
        sharpAxe.price += 25
    } else {
        throw new Error('Unable to buy')
    }
    drawWoodCounter()
    // refactored in drawClickUpgrades drawSharpAxe()
    drawClickUpgrades()
    drawUpgradesPurchased()
    drawWoodPerClick()
    // ✅ console.log('buying an axe', sharpAxe)
}

function buyChainsaw() {
    // ✅ find the sharpAxe in the array
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')
    // ✅ Increase the quantity of the sharpAxe
    // ✅ Only if the user has enough wood to make the purchase
    if (wood >= chainsaw.price) {
        chainsaw.quantity++
        wood -= chainsaw.price
        chainsaw.price += 250
    } else {
        throw new Error('Unable to buy')
    }
    drawWoodCounter()
    // refactored in drawClickUpgrades drawChainsaw()
    drawClickUpgrades()
    drawUpgradesPurchased()
    drawWoodPerClick()
    // ✅ console.log('buying an axe', sharpAxe)
}


function buyLumberjack() {
    // ✅ find the sharpAxe in the array
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')
    // ✅ Increase the quantity of the sharpAxe
    // ✅ Only if the user has enough wood to make the purchase
    if (wood >= lumberjack.price) {
        lumberjack.quantity++
        wood -= lumberjack.price
        lumberjack.price += 1000
    } else {
        throw new Error('Unable to buy')
    }
    drawWoodCounter()
    // drawLumberjack()
    drawAutoUpgrades()
    drawUpgradesPurchased()
    drawWoodPerSecond()
    // ✅ console.log('buying an axe', sharpAxe)
}


function buyLoggingCamp() {
    // ✅ find the sharpAxe in the array
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')
    // ✅ Increase the quantity of the sharpAxe
    // ✅ Only if the user has enough wood to make the purchase
    if (wood >= loggingCamp.price) {
        loggingCamp.quantity++
        wood -= loggingCamp.price
        loggingCamp.price += 10000
    } else {
        throw new Error('Unable to buy')
    }
    drawWoodCounter()
    // drawLoggingCamp()
    drawAutoUpgrades()
    drawUpgradesPurchased()
    drawWoodPerSecond()
    // ✅ console.log('buying an axe', sharpAxe)
}


//ANCHOR autoUpgrades at work
setInterval(autoLogging, 1000)

//ANCHOR drawing to page
drawWoodCounter()
drawWoodPerClick()
drawWoodPerSecond()
/* drawSharpAxe()
drawChainsaw()
drawLumberjack()
drawLoggingCamp() */
drawClickUpgrades()
drawAutoUpgrades()
drawUpgradesPurchased()
drawWoodPerSecond()

