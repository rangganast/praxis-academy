class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.luas = this.area;
    }
    // Getter
    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

class Cube extends Rectangle {
    constructor(height, width, tinggi) {
        super(height, width);
        this.tinggi = tinggi;
    }

    volume() {
        return this.height * this.width * this.tinggi;
    }
}

// const kotak1 = new Rectangle(10, 8);
// console.log(kotak1.luas);

const cube1 = new Cube(10, 10, 10);
console.log(cube1.volume());