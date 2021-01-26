// Show max price from range

let priceRange = document.querySelector('.priceRange');
let priceMaxRange = document.querySelector('.maxPriceRange');

priceRange.addEventListener('change', correctInputMaxPrice);
priceMaxRange.addEventListener('change', correctRangeMaxPrice);



// priceRange.onchange = function() {
//     let priceMax = priceRange.value;
//     priceMaxRange.value = priceMax;
//     console.log(priceMax);
// }

// priceMaxRange.onchange = function() {
//     priceRange.value = priceMaxRange.value;
// }

function correctInputMaxPrice() {
    priceMaxRange.value = priceRange.value;   
}

function correctRangeMaxPrice() {
    priceRange.value = priceMaxRange.value;
}

