let wood = 0;
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

function drawWoodCounter() {
    const woodCounterElem = document.getElementById('woodCount')
    woodCounterElem.innerText = wood
   // ✅ console.log('does this show up on the page?', wood)
}

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
    drawSharpAxe()
    // ✅ console.log('buying an axe', sharpAxe)
}

function drawSharpAxe() {
    const sharpAxeElem = document.getElementById('purchaseAxe')
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')

    sharpAxeElem.innerText = sharpAxe.price
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
    drawChainsaw()
    // ✅ console.log('buying an axe', sharpAxe)
}

function drawChainsaw() {
    const chainsawElem = document.getElementById('purchaseChainsaw')
    const chainsaw = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'chainsaw')

    chainsawElem.innerText = chainsaw.price
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
    drawLumberjack()
    // ✅ console.log('buying an axe', sharpAxe)
}

function drawLumberjack() {
    const lumberjackElem = document.getElementById('purchaseLumberjack')
    const lumberjack = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'lumberjack')

    lumberjackElem.innerText = lumberjack.price
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
    drawLoggingCamp()
    // ✅ console.log('buying an axe', sharpAxe)
}

function drawLoggingCamp() {
    const loggingCampElem = document.getElementById('purchaseLoggingCamp')
    const loggingCamp = autoUpgrades.find((autoUpgrade) => autoUpgrade.name == 'loggingCamp')

    loggingCampElem.innerText = loggingCamp.price
}

//ANCHOR autoUpgrades at work
setInterval(autoLogging, 2000)

//ANCHOR drawing to page
drawWoodCounter()
drawSharpAxe()
drawChainsaw()
drawLumberjack()
drawLoggingCamp()

