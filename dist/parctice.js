"use strict";
let count = 0;
count += 1;
//count = "I am String!"; //Error 숫자형에 문자를 대입하려고 햇기에
//Type '"I am String!"' is not assignable to type 'number'.ts(2322)
const message = "hello world";
const done = true;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
//messages.push(1); //문자열 배열에 숫자형을 대입하려고 햇기에!
//Type '"green"' is not assignable to type '"red" | "orange" | "yellow"'.ts(2322)
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = 'red';
color = 'yellow';
//color = 'green'; //정해진 데이터에서 없는값을 대입하려고 햇기에!
//Type '"green"' is not assignable to type '"red" | "orange" | "yellow"'.ts(2322)
