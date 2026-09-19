function isValidPrice ( price ){
    return typeof price === "number" && price > 0;
}

function isValidEmail (email){
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent){
    if(!isValidPrice){
        return 0;
    }
    let discountAmmount = (price * discountPercent)/100;
    return price - discountAmmount;
}

function calculateFinalBill( price , vatPercentage = 15){
    let vat = ( price * vatPercentage)/100;
    return price + vat;
}

function formatBDT(ammount){
    return `${ammount.toFixed(2)}BDT`;
}

function capitalized(str){
    if(!str)return"";
    return str.charAt(0).toUpperCase()+str.slice(1);
}
function processOrder(user, itemPrice, discountCode){
    console.log(`--- processing order for ${capitalized(user.name)}---`);
    if(!isValidEmail(user.email)){
        console.log("Error: Invalid user email");
        return;
    }

    let curentPrice = itemPrice;
    if(discountCode == "NLB"){
        curentPrice = calculateDiscount(itemPrice,20);
        console.log("20% discount applied");
    }
    let totalBill = calculateFinalBill(curentPrice);
    console.log("Final ammount to pay: ", formatBDT(totalBill) );
    console.log("Order completed successfully");
}

let user1 = { name: "Abir", email: "abirali@gmail.com"};
processOrder(user1, 2000, "NLB");