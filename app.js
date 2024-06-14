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
  
  let automaticUpgrades = [
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




//ANCHOR drawing to page
drawWoodCounter()
drawSharpAxe()
drawChainsaw()