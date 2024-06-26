class Person {
    private _age:number;

    constructor(age: number) {
        this._age = age
    }

    public getAge(): number {
        return this._age
    }

    public setAge(newAge: number): void {
        this._age = newAge
    }
}

const person = new Person(25)
console.log(person.getAge()) //25
person.setAge(30)
console.log(person.getAge()) //30