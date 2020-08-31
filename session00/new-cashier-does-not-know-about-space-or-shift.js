// Link to kata:
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

// Build an array of every Menu item
const menu = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

function getOrder(input) {
  // initialize a new order list
  let newOrderList = ``;
  // copy the input to prevent mutations
  let inputcopy = input;
  // iterate over the menu array
  for (let i = 0; i < menu.length; i++) {
    // for each menu element put it to lowercase
    const menuItem = menu[i].toLowerCase();
    // check if menu element is in the array and repeat until we can't find it anymore
    let index = 0;
    while (index != -1) {
      // get the index of the item
      index = inputcopy.indexOf(menuItem);
      if (index != -1) {
        // remove item from the order and add it to the new list
        inputcopy = inputcopy.replace(menuItem, '');
        newOrderList += newOrderList.length ? ` ${menu[i]}` : `${menu[i]}`;
      }
    }
  }
  return newOrderList;
}

function getOrder(input) {
  let newOrderList = ``;
  let inputcopy = input;
  menu.forEach((item) => {
    const menuItem = item.toLowerCase();
    while (true) {
      index = inputcopy.indexOf(menuItem);
      if (index === -1) break;
      inputcopy = inputcopy.replace(menuItem, '');
      newOrderList += ` ${item}`;
    }
  });

  return newOrderList;
}

function getOrder(input) {
  let inputcopy = input;

  return menu.reduce((order, item) => {
    const menuItem = item.toLowerCase();
    while (true) {
      const index = inputcopy.indexOf(menuItem);
      if (index === -1) break;
      inputcopy = inputcopy.replace(menuItem, '');
      order += order.length ? ` ${item}` : `${item}`;
    }
    return order;
  }, '');
}

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
console.log(getOrder('pizzachickenfriesburgercokemilkshakefriessandwich'));
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
