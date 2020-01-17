"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: "테스터",
    age: 20
};
const developer = {
    name: "Pro",
    skills: ["javascript", "SQL"]
};
const person2 = {
    name: "테스터",
    age: 20
};
const expert = {
    name: '개발자',
    skills: ["Javascript", "Typescript"]
};
const people = [person, expert];
