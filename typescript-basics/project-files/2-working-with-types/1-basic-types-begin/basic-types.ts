let numbers: number[];

numbers = [1, 2, 3, 4, 5];

// console.log(typeof numbers);

// let strings: Array<string>;
let strings: string[];

strings = ['1', '2', '3'];

let coord: [number, string];

coord = [0, ' '];

let mixedTypes: [number, string, boolean];

mixedTypes = [...coord, true];


// --

let justLikeJS: any;

justLikeJS = 2;
justLikeJS = 'two';
justLikeJS = false;

function printToTheConsole(): void {
    console.log('some text');
};

let test: void;
test = undefined;

let age = 20;
let personData = {
    name: 'Tim',
    age,
};

let personAge: number | null;

personAge = personData.age;
