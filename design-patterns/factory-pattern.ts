// Factory pattern is used to create objects without specifying the exact class of object that will be created. 
//This is particularly useful when the type of the object needs to be decided at runtime.

class Dog {
    speak() {
        console.log("Bark")
    }
}

class Cat {
    speak() {
        console.log("Mew")
    }
}

class AnimalFactory {
    static createAnimal(type) {
        switch(type) {
            case "dog":
                return new Dog()
            case "cat":
                return new Cat()
            default:
                throw new Error("Unknown animal type entered.")
        }
    }
}

const dog = AnimalFactory.createAnimal("dog");
console.log(dog.speak()) // Bark

const cat = AnimalFactory.createAnimal("cat");
console.log(cat.speak()) // Mew