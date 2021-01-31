// Show max price from range

let priceRange = document.querySelector('.price-range');
let priceMaxRange = document.querySelector('.max-price');

priceRange.addEventListener('change', correctInputMaxPrice);
priceMaxRange.addEventListener('change', correctRangeMaxPrice);

function correctInputMaxPrice() {
    priceMaxRange.value = priceRange.value;
}

function correctRangeMaxPrice() {
    priceRange.value = priceMaxRange.value;
}

