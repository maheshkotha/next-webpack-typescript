

type User = {
  firstName: string;
  lastName: string;
  age: number;
}
const user: User = {
  age: 35,
  firstName: 'Mahesh',
  lastName: 'babu'
}

function printUser():User {
  return { ...user }
}


type Dept = {
  name: string;
  id: number;
  readonly location: string
  email?: string  // optional property
}

const dept: Dept = {
  name: 'it',
  id: 1,
  location: "12.23423, 32.12343"
}

// dept.location = "32.2343 23.2345432" // we can't ressign it is redonly property.

const printDeptInfo = (dept: Dept): string => {
  return `${dept.name} - ${dept.location} ${dept?.location}`
}

console.log(printDeptInfo(dept))



type UserInfo = {
  first: string;
  last: string;
  age: number;
}

type AccountDetails = {
  email: string;
  password: string;
}

type UserAccount = UserInfo & AccountDetails;

const user1: UserAccount = {
  first: "mahesh",
  last: "babu",
  age: 35,
  email: "email.com",
  password: '123456'
}

let password: string | number = 12345

const user2: UserInfo | AccountDetails = {
  email: "dskjfa.com",
  password: "dksjfkdas"
}

//  Literal Types

let ballNo:  1 | 2 | 3 | 4 | 5 | 6

ballNo = 2


//  tuple
const myList: [string, number, boolean] = ["game 1", 1, true]
// const myList2: [string, string, string] = ["game 2", 2, true]  // error accept all string values


// Enum
enum Weathercondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy"
}

let currentWeather = Weathercondition.Sunny;
currentWeather = Weathercondition.Cloudy
console.log(currentWeather)

