let id: string | number;

id = 1;
id = 'he';

type CanDrive = string | number | boolean;
let canDrive: CanDrive;

canDrive = 'est';
canDrive = 0;
canDrive = true;

let ids: (string | number)[];

ids = [1, 'test', 'ef', 2];


type TeamLead = Employee & Manager;

const jim: TeamLead = {
    name: 'Jim',
    job: 'Lead',
    manages: [tim, jack]
};

// type StringNum = string & number;

// let test4: StringNum;

// test5 = 30;

// id = 5;
// const singleIds = id.split('');