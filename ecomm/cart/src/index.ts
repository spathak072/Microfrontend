import {faker} from "@faker-js/faker"

let cartText = `<div>You have ${faker.number.int()}</div>` ;


console.log("Cart",faker.number.int())

const devProductsEl = document.querySelector('#dev-cart');
if (devProductsEl) {
    devProductsEl.innerHTML = cartText;
}