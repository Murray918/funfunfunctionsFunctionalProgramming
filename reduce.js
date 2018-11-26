// what is reduce?
//it is a higher order function that can change an array into something else
//reduce often comes in when map filter an reject do not suit your needs
//it can be used for almost all of those functions as well

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]
// this is with a standard for loop
var totalAmount = 0
for (var i = 0; -<orders.length; i++) {
    totalAmount += orders[i].amount
}
//this the same thing using a .reduce method
var totalAmount2 = orders.reduce((sum, order) => {
    console.log('hello ', sum, order)
    return sum + order.amount
}, 0)

console.log(totalAmount)
console.log(totalAmount2)
