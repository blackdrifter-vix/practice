class Animal {
    speak(): void {
        console.log("The animal makes a sound")
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Dog barks!")
    }
}

class Cat extends Animal {
    speak(): void {
        console.log("Mew!")
    }
}

const dog = new Dog()
const cat = new Cat()

dog.speak() // Dog barks!
cat.speak() // Mew!