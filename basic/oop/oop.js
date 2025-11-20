// class → blueprint for objects
class Animal {
  // constructor(args) → initialize instance
  constructor(name) { this.name = name }
  // method() → behavior on instances
  speak() { return `${this.name} makes a noise` }
}

// extends → inheritance from base class
class Dog extends Animal {
  // super(args) → call base constructor
  constructor(name) { super(name) }
  // override method
  speak() { return `${this.name} barks` }
}

// new Class(...) → instantiate
const d = new Dog('Rex')
console.log(d.speak()) // Rex barks