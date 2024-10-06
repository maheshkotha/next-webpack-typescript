

// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue]
// }

// function printBool(item: boolean, defaultValue: boolean): [boolean, boolean] {
//   return [item, defaultValue]
// } 


// const num = printNumber(2, 20)
// const str2 = printString("mahesh", "babu");
// const bool = printBool(true , false);

// console.log(num)
// console.log(str2)
// console.log(bool)

// ======================= Generics ======================
function uniqueDataTypesFun<Type>(item: Type, defaultValue: Type): [Type, Type] {

  return [item, defaultValue]
}

const num = uniqueDataTypesFun<number>(10, 20);
const str2 = uniqueDataTypesFun<string>("Hello", "worl");
const bool = uniqueDataTypesFun<boolean>(true, false)

console.log(str2)
console.log(num)
console.log(bool)

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFun<Dog>(
  {name: "buddy", breed: 'Labrador'},
  {name: "default", breed: "unknown"}
)

console.log(dog1)

function getRandomKeyValuePair<T>(obj: {[key: string]: T}): {
  key: string,
  value: T
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  return {key: randomKey, value: obj[randomKey]}
}

const stringObj = { a: "Apple", b: "Banana", c: "Cherry"};
const numberObj = {one: 1, two: 2, three: 3}

const randItem = getRandomKeyValuePair<string>(stringObj);
const randNum = getRandomKeyValuePair<number>(numberObj)

console.log(randItem);
console.log(randNum)

 function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) =>condition(item))
 }

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const evenNum = filterArray<number>(numbers, (item) => item % 2 === 0);
 console.log(evenNum);

 const fruits = [ 'apple', 'banana', 'cherry', 'date'];
 const shortWords = filterArray<string>(fruits, (item) => item.length < 6);
 console.log(shortWords)

 interface Fruit {
  name: string;
  color: string;
 }

 const fruitsList = [
  {name: 'apple', color: 'red'},
  {name: 'banana', color: 'yellow'},
  {name: 'jama', color: 'green'}
 ]
 const fruitsListWithRed = filterArray<Fruit>(fruitsList, (item) => item.color === 'red');

 function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1]
 }

 const reverseValues = reversePair("hello", 20);
 console.log(reverseValues)

 class Box<T> {
    private content: T

    constructor(initialContent: T) {
      this.content = initialContent;
    }

    getContent(): T {
      return this.content
    }

    setContent(content: T): void {
      this.content = content;
    }

 } 

 const newBox = new Box<string>("Hello Typescript");
 console.log(newBox.getContent());
 newBox.setContent("Hello Typescript with Huxn");
 console.log(newBox.getContent())
