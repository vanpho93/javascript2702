const giao = {
    name: 'Giao',
    age: 20
}

const khoa = {
    name: 'Khoa Pham',
    friend: giao,
    age: 30,
    show() {
        console.log('Hello, I am ' + this.name);
    }
};

giao.friend = khoa;

console.log(khoa.friend.friend.friend.name);

console.log(khoa);