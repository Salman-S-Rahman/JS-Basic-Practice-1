var numbers = [77, 43, 11, 4, 7, 2, 90, 59];
var sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// =========== it's not the right way ===========


var sortNumber = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sortNumber);
