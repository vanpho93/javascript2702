function Point (x, y) {
    this.x = x;
    this.y = y;
}

function Line(diemA, diemB) {
    this.diemA = diemA;
    this.diemB = diemB;
    this.getLength = function() {
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

function Triangle(diemA, diemB, diemC) {
    this.diemA = diemA;
    this.diemB = diemB;
    this.diemC = diemC;
    this.getChuVi = function() {
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
