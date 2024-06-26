class Vehicle {
    greet: string;
    
    constructor(welcome: string) {
        this.greet = "Hello " + welcome
    }
    
    start(): void {
        console.log(this.greet + ". Start vehicle")
    }

    test() {
        console.log("Test for Vehicle class")
    }
}

class Car extends Vehicle {
    constructor(welcome) {
        super(welcome)
    }

    test() {
        console.log("Test for Car class")
    }

    startCar(): void {
        this.start()
        super.test()
        this.test()
    }
}

const car = new Car("Malwe")
car.startCar()

// Hello Malwe. Start vehicle
// Test for Vehicle class
// Test for Car class