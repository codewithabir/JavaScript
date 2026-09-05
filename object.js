let user ={
  name : "Abir",
  age : 21,
  address : "Dhaka",
};
//console.log(user.name);
//console.log(user["name"]);
delete user.address;
console.log(user);
user.address = "Manikganj";
user.address = {
    city : "jhitka",
    area : "harirampur",
};
console.log(user);