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

//console.log(user["address"]["zipcode"]);
// console.log(user.address.zipcode);
// let entry = Object.entries(user);
// console.log(entry[0][1]);
let students = [
    {
        name: "Abir",
        id : 302,
        address :{
            area : "Savar",
            thana : "Dhamrai",
            lane : "Madrasa road",
            option: ["Nilachol","selfie","D-link"],
        },
    },
    {
        name: "Sabir",
        id : 302,
    },
    {
        name: "Kabir",
        id : 302,
    },
];


students[0].address.option[1] = "SBsuper" ;
console.log(students[0].address.option[1]);