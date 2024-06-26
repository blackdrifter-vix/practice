class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

function printArea(shape) {
    console.log(shape.getArea());
}

const myRectangle = new Rectangle(4, 5);
const mySquare = new Square(4);

printArea(myRectangle); // 20
printArea(mySquare);    // 16
