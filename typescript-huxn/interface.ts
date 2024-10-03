(function() {


  // objectr
  interface Computer {
    name: string;
    ram: number;
    hdd: number
  }

  const computerExample: Computer =  {
    name: 'i7',
    ram: 8,
    hdd: 100
  }

  // usages
  console.log(computerExample.name);
  console.log(computerExample.hdd)
  console.log(computerExample.ram);
  

  interface Movie {
    readonly name: string;
    rating: number;
    genra?: string
  }

  const myMovie: Movie = {
    name: "rrr",
    rating: 8,
    genra: 'Action'
  }

  // myMovie.name = "RRR" // readonly


  // interface for function 
  interface MathOperation {
    (x: number, y: number): number
  }

  const add:MathOperation = (a, b) => a + b;
  const substract: MathOperation = (a, b) => a - b;

  // interface for class
  interface Vecicle {
    start(): void;
    stop(): void;
  }

  class Car implements Vecicle {
    start(): void {
      console.log('car started')
    }

    stop(): void {
      console.log("car stop")
    }
  }

  const myCar = new Car();
  myCar.start()
  myCar.stop();

})()