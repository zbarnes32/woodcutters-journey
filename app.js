let wood = 0;
let currentMultiplier = 0;

let clickUpgrades = [
    {
      name: 'sharpAxe',
      price: 100,
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
    wood += 1
    drawWoodCounter()
}

function drawWoodCounter() {
    const woodCounterElem = document.getElementById('woodCount')
    woodCounterElem.innerText = wood
   // ✅ console.log('does this show up on the page?', wood)
}

function buySharpAxe() {
    // find the sharpAxe in the array
    const sharpAxe = clickUpgrades.find((clickUpgrade) => clickUpgrade.name == 'sharpAxe')
    // Increase the quantity of the sharpAxe
    // Only if the user has enough wood to make the purchase
    if (wood >= sharpAxe.price) {
        sharpAxe.quantity++
        wood -= sharpAxe.price
        sharpAxe.price += 10
    }

}




//ANCHOR drawing to page
drawWoodCounter()