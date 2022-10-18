var cart = [
  { name: "cloth", price: 2000 },
  { name: "bag", price: 1000 },
];

var numOfItems = `${cart.length} items in cart`;

var cartTable = `<ul>
    <li>item : ${cart[0].name}, price: ${cart[0].price}</li>
    <li>item : ${cart[1].name}, price: ${cart[1].price}</li>
</ul>`;
console.log(numOfItems);
console.log(cartTable);

var personName = "Juchan";
var helloString = "hello " + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);
