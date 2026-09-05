let user = {
  name : "Abir",
  age : 21,
  address : "Dhaka",
};
// console.log(user);
// console.log(user.name);
// console.log(user["name"]);
delete user.address;
user.address = "Manikganj";
user.address = {
  city : "Manikganj",
  area : "Uposohor",
};
// console.log(user);
console.log(Object.entries(user));
console.log(Object.keys(user));
console.log(Object.values(user));