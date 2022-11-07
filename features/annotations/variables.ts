let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
// built in objects
let now: Date = new Date();
// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];
// Class
class Bus {}
let bus: Bus = new Bus();
// Object literal
let point: { x: number; y: number } = { x: 10, y: 20 };
//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
//When to use annotations
// when type any is being assigned to variable
const json = '{ x: 10; y: 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// declare variable and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'red') {
        foundWord = true;
    }
}
//Variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
