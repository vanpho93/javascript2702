// const khoa = {
//     name: 'Khoa Pham',
//     age: 30
// };

// console.log(khoa);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function() {
        console.log('Hello, I am ' + this.name);
    }
    this.incrAge = function() {
        this.age++;
    }
    this.setAge = function(newAge) {
        this.age = newAge;
    }
}

const khoa = new Person('Khoa', 30);
const huong = new Person('Huong', 29);
// console.log(khoa.name + khoa.age);
khoa.incrAge();
khoa.incrAge();
khoa.setAge(60);
console.log(khoa);

khoa.age = 70;
console.log(khoa);