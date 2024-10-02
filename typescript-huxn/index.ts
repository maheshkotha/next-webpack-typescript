type Person = {
  name: string
}

const person: Person = {
  name: "mahesh"
}

console.log(person.name)

//  Annotations
  // Strings
  let myName: string = "mahesh"
  console.log(myName)

  // Numbers
  let favNumber: number = 5;
  console.log(favNumber)

  // Boolean
  let tsHard: boolean = false;
  console.log(tsHard)


  // Inference
  let tech = "typescript"
  let favNum = 1
  console.log(typeof tech)

  //  any
  let color: any = "green";
  color = 1;
  color = false;
  color = ['green', 'blue', 'red'];
  color = {key: 'green'}

  console.log(color)


  //  Function Parameter annotation
  function addOne(num: number) {
    return num + 1;
  }

  const res = addOne(favNum);
  console.log(res)

  const multiple = (x: number, y: number) => {
    return x * y
  }

  // Default Params
  const greet = (person = "Annonimus") => {
    return `Hello ${person}`
  }
  console.log(greet("mahesh"))

  //  Return Annotation

  const greet2 = (person = "Annonimus"): string => {
    return `Hello ${person}`
  }
  console.log(greet2 ("mahesh"))

  // without return use void
  const greet3 = (person="annonimus"): void => {
    console.log(`hello ${person}`)
  }
  greet3();

  //   Arrays

  const nums: number[] = [1, 2, 3, 4, 5]
  const str: string[] = ["mahesh", "27", "abc"];

  const items = [12, "str"] // type is (string | number)[]  inference 

  const itemList: Array<number> = []
  itemList.push(20)
  // itemList.push("mahesh")  // error

  const singleDi: number[] = [1, 2, 3, 4, 5];
  const multiDi: number[][] = [[1, 2], [3, 4]];
  const tripleDi: number[][][] = [multiDi]  // or [[[1,2 ,3, 4]]] like

  console.log(singleDi);
  console.log(multiDi);
  console.log(tripleDi);


