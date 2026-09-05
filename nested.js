const { use } = require("react");

let user ={
    name : "abir",
    age : 22,
    address: {
        city: "Manikganj",
        area : "Upashahar",
        zipcode: 1800,
    },

};
//console.log(user["address"]["zipcode"]);
//console.log(user.address.area);
let entry = Object.entries(user);
console.log(entry[0][1]);