const { use } = require("react");

let user = {
  name: "Abir",
  age: 21,
  address: {
    city: "Manikganj",
    area: "Uposohor",
    zipcode: 1800,
  },
};

console.log(user["address"]["zipcode"]);
// console.log(user.address.zipcode);
