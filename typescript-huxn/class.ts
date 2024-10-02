
(function() {

  class Person {
    name: string;
    age: number
    
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age
    }
  }

  const person = new Person("mahesh", 35);
  console.log(person)

  //  Access Modifiers
  class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public getName(): string {
      return this.name;
    }
  }

  class Dog extends Animal {
    dogAge: number
    constructor(name: string, dogAge: number) {
      super(name, dogAge);
      this.dogAge = dogAge;
    }
  }

  const dog = new Dog('jimmy', 5);
  console.log(dog.getName())
  console.log(dog.dogAge)


  class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
      return this._myProperty;
    }

    set myProperty(value: number) {
      this._myProperty = value
    }
  }

  const instance = new MyClass();

  console.log(instance.myProperty);
  instance.myProperty = 10;
  console.log(instance.myProperty)


})()
