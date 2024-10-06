
type MyValue = string | number;

function exampleFun(prop: MyValue): void {
  if(typeof prop === 'string') {
    console.log(prop.toUpperCase());
  } else {
    console.log(prop.toFixed(2))
  }
}

exampleFun("mahesh")
exampleFun(35)


class Dog1 {
  bark(): void {
    console.log("bark bark")
  }
}

class Cat {
  meow(): void {
    console.log("meow meow")
  }
}

function animalSound(animal: Dog1 | Cat) {
  if(animal instanceof Dog1) {
    animal.bark();
  } else {
    animal.meow()
  }
}