

const products = require('../routes/products');
const tickets = require('../routes/tickets');

const array = [products, tickets];

module.exports = array.map((value) => {
  return value;
});
