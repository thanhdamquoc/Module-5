"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let width;
let height;
width = 10.5;
height = 20;
let area = width * height;
console.log(`Diện tích hình chữ nhật: ${area}`);
let sum = 0;
let count = 0;
for (let i = 2; count < 30; i++) {
    let isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
function isPrime(number) {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum1 = 0;
for (let number of array) {
    if (isPrime(number)) {
        sum1 += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum1);
const rectangle_1 = require("./rectangle");
const rectangle = new rectangle_1.Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(9));
//# sourceMappingURL=main.js.map