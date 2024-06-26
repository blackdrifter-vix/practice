abstract class Shape {
    abstract area(): number;

    printArea(): void {
        console.log("Area is: " + this.area)
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    area(): number {
        return Math.PI * this.radius * this.radius
    }
}

const circle = new Circle(3)
console.log(circle.area()) // 28.274333882308138
