
// ========= factorial of 5 ========
var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// ======== factorial using function =========

function fact(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;

}

var firstFactorial = fact(5);
var secondFactorial = fact(3);
console.log(firstFactorial);
console.log(secondFactorial);
