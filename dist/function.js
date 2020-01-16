"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
/*
reduce() 는 배열을 순회하며 인덱스 데이터를 줄여가며 어떠한 기능을 수행 할 수 있다.

numberList.reduce((initialValue, currentValue, currentIndex, array) => {
    return initialValue + currentValue;
}, initValue);
*/
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);


