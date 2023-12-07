let id2: string | number;

id2 = 1;
id2 = 'string';

type CanDrive2 = string | number | boolean;
let canDrive2: CanDrive2;

canDrive2 = 'hey';
canDrive2 = 2;
canDrive2 = false;

let ids2: (string | number)[];

ids2 = [1, 'two', 3];

type TeamLead2 = Employee & Manager;

const jim2: TeamLead = {
    name: 'Jim',
    job: 'Lead',
    manages: [tim, jack]
}

// type StringNum = string & number;
// let test5: StringNum;
// test5 = 20;

id2 = 5;
id2 = 'five';
const singleIds2 = id2.split('');