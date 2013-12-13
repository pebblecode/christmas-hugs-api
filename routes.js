'use strict';

var products = [
  {
    id: 1,
    name: 'Guitar'
  },
  {
    id: 2,
    name: 'Banjo'
  }
];

function getProducts(request) {
  request.reply(products);
}


module.exports = [
  { method: 'GET', path: '/products', config: { handler: getProducts } }
];
