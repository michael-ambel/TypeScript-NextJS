// let age = 30;
// console.log(age);

// ...................................

// //arrays and object literals

// let names: string[] = ["apple", "banana"];
// let age: number[] = [2, 8, 4];
// //type inferance
// let fruit = ["apples", 1]; //let fruit: (string | number)[]
// fruit.push("peaches");
// let f = fruit[1]; //const f: string | number
// f = 2; //let f: string | number
// console.log(f);

// let user: { firstName: string; age: number; id: number } = {
//   firstName: "luigi",
//   age: 30,
//   id: 838,
// };

// let animals: { [key: string]: string };
// animals = {wild: 'dog', flying: 'eagle'}

// //.......................................
// //function
// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
// }
// const subtractTwoNumbers = (a: number, b: number): number => {
//   return a - b;
// };

// function addAllNumber(items: number[]) {
//   const total = items.reduce((a, c) => a + c, 0);
//   console.log(total);
// }

// addAllNumber([2, 6, 4, 7, 9]); //inferance give void for the addAllNumber function

// //.......................................
// //any
// let age: any;
// let title;

// age = 30;
// age = "thirty";

// title = 25;
// title = "book";

// let things: any[] = ["book", 7, true];
// things.push({ id: 60023 });
// console.log(things); //[ 'book', 7, true, { id: 60023 } ]

// function addTogether(value: any): any {
//   return value + value;
// }

// console.log(addTogether("apple"));
// console.log(addTogether(3));

// //.......................................
// //tuples fixed sized and orderd array

// let hsla: [number, string, string, number] = [200, "100%", "50%", 1];
// hsla.push(2);
// console.log(hsla);
// // console.log(hsla[4]); error bc even if push it can not be called
// hsla = [23, "30%", "0%", 8];
// // named tuple used for identifier
// let user: [name: string, age: number];

// //.......................................
// //interfaces
// interface Author {
//   name: string;
//   avatar: string;
// }

// const authorOne: Author = { name: "luigi", avatar: "/img/luigi.png" };

// interface Post {
//   title: string;
//   body: string;
//   tags: string[];
//   created_at: Date;
//   author: Author;
// }

// const newPost: Post = {
//   title: "my first post",
//   body: "about fruits",
//   tags: ["apple", "orange"],
//   created_at: new Date(),
//   author: authorOne,
// };

// function creatPost(post: Post): void {
//   console.log(`Post with title ${post.title} by ${post.author.name} `);
// }

// creatPost(newPost);

// //with arrays
// let posts: Post[] = [];

// posts.push(newPost);
// console.log(posts);

// interface Add {
//   (a: number, b: number): number;
// }

// const add: Add = (x, y) => x + y;

// console.log(add(5, 3)); // 8

// //.......................................
// //type aliases

// //for tuple
// type Rgb = [number, number, number];

// function getRandomColor(): Rgb {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return [r, g, b];
// }

// const colorOne = getRandomColor();
// console.log(colorOne);

// //for object
// type User = {
//   name: string;
//   score: number;
// };

// const userOne: User = { name: "luigi", score: 90 };
// console.log(userOne);

// //............................................
// //union

// interface Id {
//   id: number | string;
// }

// let idOne: Id = { id: 1 };
// idOne = { id: "one" };

// type anotherId = number | string;
// let idTwo: anotherId;

// idTwo = 22;
// idTwo = "two";

//type guards

// type idOne = string;
// type idTwo = number;

// type userId = idOne | idTwo;

// function swapId(id: userId) {
//   if (typeof id === "string") {
//     return parseInt(id);
//   }

//   if (typeof id === "number") {
//     return id.toString();
//   }
// }

// console.log(swapId("1"));
// console.log(swapId(4));

// //tagged interface
// interface Circle {
//   kind: "circle"; // Tag
//   radius: number;
// }

// interface Triangle {
//   kind: "triangle"; // Tag
//   base: number;
//   height: number;
// }

// // Union of shapes
// type Shape = Circle | Triangle;

// // Function to calculate the area
// function calculateArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;

//     case "triangle":
//       return (shape.base * shape.height) / 2;

//     default:
//       throw new Error("Unknown shape");
//   }
// }

//function signature
//by type aliases
// type Calculater = (numOne: number, numTwo: number) => number;
// //by using interfaces
// interface Comparator {
//   (a: number, b: number): boolean;
// }

// //extending interfaces
// interface BaseInterface {
//   property1: string;
// }

// interface ExtendedInterface extends BaseInterface {
//   property2: number;
// }

// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: "John Doe",
//   employeeId: 12345,
// };

//extending type eliases

type BaseType = {
  property1: string;
};

type ExtendedType = BaseType & {
  property2: number;
};

type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = {
  name: "Jane Doe",
  employeeId: 67890,
};
