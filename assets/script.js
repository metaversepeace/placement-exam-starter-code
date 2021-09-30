// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')


let yourName = "James Broucek"; 

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread;
let cc = 0      // Chocolate Chip;
let sugar = 0   // Sugar Sprinkle;

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`;


let gbOrder = 0;

let gbTotalCell = document.querySelector('#qty-gb');

let cookieTotalCell = document.querySelector('#qty-total');


document.getElementById('add-gb').addEventListener('click', function() {
    gbOrder = gbOrder + 1; console.log(gbOrder);
    gbTotalCell.textContent = gbOrder;
    cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})


document.getElementById('minus-gb').addEventListener('click', function() {
    if(gbOrder > 0){gbOrder = gbOrder - 1}; console.log(gbOrder);
    gbTotalCell.textContent = gbOrder;
    cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})


let ccOrder = 0;

let ccTotalCell = document.querySelector('#qty-cc');

document.getElementById('add-cc').addEventListener('click', function() {
    ccOrder = ccOrder + 1; console.log(ccOrder);
    ccTotalCell.textContent = ccOrder;
    cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})


document.getElementById('minus-cc').addEventListener('click', function() {
    if(ccOrder > 0){ccOrder = ccOrder - 1}; console.log(ccOrder);
    ccTotalCell.textContent = ccOrder;
    cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})



let sugarOrder = 0;

let sugarTotalCell = document.querySelector('#qty-sugar');

document.getElementById('add-sugar').addEventListener('click', function() {
    sugarOrder = sugarOrder + 1; console.log(sugarOrder);
sugarTotalCell.textContent = sugarOrder;
cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})


document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugarOrder > 0){sugarOrder = sugarOrder - 1}; console.log(sugarOrder);
    sugarTotalCell.textContent = sugarOrder;
    cookieTotalCell.textContent = gbOrder + ccOrder + sugarOrder})
