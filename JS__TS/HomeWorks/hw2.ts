let x: string = "sss";
let y: Number = 123;
let z: boolean = false;

console.log(x);
console.log(y);

let firstArray: number[] = [1, 223, 999]; //Array - a
let secondArray: any[] = [x, y, z]; //Array - b
let thirdArray: string[] = ["dddd", "fancyCar", "Life_is_Life na-na-Nana-na"]; //Array - c

x = thirdArray[0];
y = firstArray[firstArray.length - 1];

console.log(x);
console.log(y);
