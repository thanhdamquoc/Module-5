var width;
var height;
width = 10.5;
height = 20;
var area = width * height;
console.log("Di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt: " + area);
var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime_1 = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime_1 = false;
            break;
        }
    }
    if (!isPrime_1) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum1 = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var number = array_1[_i];
    if (isPrime(number)) {
        sum1 += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum1);
