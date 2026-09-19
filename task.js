let cart = [
    {name : "shirt", price: 1200, quantity: 2},
    {name: "pants", price: 1800, quantity: 1},
    {name: "socks", price : 150, quantity: 3},
];

totalItem = 0;
totalBill = 0;
for(let item of cart){
    totalItem += item.quantity;
    totalBill += item.price * item.quantity;
}
console.log(totalItem, totalBill);