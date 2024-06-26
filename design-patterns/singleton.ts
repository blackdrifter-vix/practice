class Vehicle {
    static instance: any;
    
    constructor() {
        if(Vehicle.instance) {
            return Vehicle.instance
        }

        Vehicle.instance = this
    }
}

// Usage
const instance1 = new Vehicle();
const instance2 = new Vehicle();

console.log(instance1 === instance2);  // true