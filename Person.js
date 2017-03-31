class Person {
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    }

    show() {
        console.log('Hello, I am ' + this.name);
    }
}

const teo = new Person('Teo', 180, 3);
const ti = new Person('Ti', 100, 10);
const tun = new Person('Tun', 160, 18);

const arrPerson = [teo, ti, tun];

// for (let i = 0; i < arrPerson.length; i++) {
//     arrPerson[i].show();
// }

//some, every

// arrPerson.forEach(e => e.show());

// const isHighEnough = arrPerson.some(person => person.height > 190);
const isHighEnough = arrPerson.every(person => person.age > 3);

console.log(isHighEnough);
