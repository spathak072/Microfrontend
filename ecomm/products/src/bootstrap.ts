import {faker} from "@faker-js/faker"
let products = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>` 
    
}
console.log("Products")

const devProductsEl = document.querySelector('#dev-products');
if (devProductsEl) {
    devProductsEl.innerHTML = products;
}