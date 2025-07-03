// let cart = ["shoes", "shirt", "pants"];

// function orderdetails(cart) {
//     return {
//         TotalItems: cart.length,
//         TotalAmmount: cart.length * 1000
//     }
// }

// function orderSummary(cart, orderDetails) {
//     return {
//         summary: "Order Summary: " + cart.join(", "),
//         AmmountGST: orderDetails.TotalAmmount * 0.18,
//         OrderId: Math.floor(Math.random() * 23)
//     }
// }

// function paymentGateway(orderDetails, summary) {
//     return {
//         paymentStatus: "Payment Successful",
//         PaymentSummary: "Payment of " + orderDetails.TotalAmmount + " with GST " + summary.AmmountGST + " is successful",
//         PaymentId: Math.floor(Math.random() * orderDetails.TotalItems)
//     }
// }

// function successfulOrder() {
//     const orderDetails = orderdetails(cart);
//     const summary = orderSummary(cart, orderDetails);
//     const paymentStatus = paymentGateway(orderDetails, summary);
//     console.log("Order Successful: ", paymentStatus);
// }

// successfulOrder();


// Array.prototype.filerRep = function (logic) {
//     let output = [];
//     for (var i = 0; i < this.length; i++) {
//         if (logic(this[i])) {
//             output.push(this[i]);
//         }
//     }
//     return output;
// }

let arr = [1, 2, 3, 4, 5];
// function odd(x) {
//     if (x % 2 == 0) {
//         return x;
//     }
// }

// let result = arr.filerRep(odd);
// console.log(result);

const initialValue = 0;
const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue); 

const sumOfAll = arr.prototype.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Sum of all elements: ", sumOfAll);

