import { faker } from '@faker-js/faker';

console.log('Cart', faker.number.int());

// const devProductsEl = document.querySelector('#dev-cart');
// if (devProductsEl) {
//     devProductsEl.innerHTML = cartText;
// }

const mount = (devProductsEl: Element) => {
  let cartText = `<div>You have ${faker.number.int()}</div>`;
  // const devProductsEl = document.querySelector('#dev-cart');
  if (devProductsEl) {
    devProductsEl.innerHTML = cartText;
  }
};

if(process.env.NODE_ENV === "development"){
    const devProductsEl = document.querySelector('#dev-cart');
    if(devProductsEl){
        mount(devProductsEl)
    }
}

export {mount}
