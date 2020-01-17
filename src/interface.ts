interface Shape {
    getArea(): number;
}

class Circle implements Shape {

    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {

    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});

/* -------------------------------------------- */

interface Person {
    name: string;
    age?: number;
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: "테스터",
    age: 20
};

const developer: Developer = {
    name: "Pro",
    skills: ["javascript", "SQL"]
}

/* -------------------------------------------- */

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[];
}
  
const person2: Person = {
    name: "테스터",
    age: 20
};
  
const expert: Developer = {
    name: '개발자',
    skills: ["Javascript", "Typescript"]
};
  
const people: Person[] = [person, expert];