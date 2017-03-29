class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(diemA, diemB) {
        this.diemA = diemA;
        this.diemB = diemB;
    }

    getLength() {
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(diemA, diemB, diemC) {
        this.diemA = diemA;
        this.diemB = diemB;
        this.diemC = diemC;
    }
    getChuVi() {
        const ab = new Line(this.diemA, this.diemB);
        const bc = new Line(this.diemB, this.diemC);
        const ac = new Line(this.diemA, this.diemC);
        return ab.getLength() + bc.getLength() + ac.getLength();
    }
}

const a = new Point(0, 0);
const b = new Point(1, 0);
const c = new Point(0, 1);

const ab = new Line(a, b);
const abc = new Triangle(a, b, c);
console.log('CHU VI', abc.getChuVi());
console.log(ab.getLength());

