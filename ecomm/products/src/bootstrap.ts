import { faker } from '@faker-js/faker';

const mount = (el: Element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log('Products');
  el.innerHTML = products;
};


if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  console.log("development",el);
  
  if (el) mount(el);
}

export { mount };
