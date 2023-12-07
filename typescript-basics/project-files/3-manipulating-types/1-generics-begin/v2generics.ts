import type {Employee, Manager, Person} from './v2generics.d.js';

const tim: Data = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    age: 2,
    data: {
        name: 'Tim',
        job: 'Security'
    }
}

const jack: Person<Employee> = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    data: {
        name: 'jack',
        job: 'Receptionist'
    }
}

const anna: Person<Manager, Date> = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: 'anna',
        manages: [tim, jack]
    }
}

type SuperString = string;
// interface SuperString2 {name: string};
// interface SuperString2 {job: string};
interface SuperString2 {data: Employee};

type Age = {
    age?: number
}

interface Data extends SuperString2, Age {
    createdAt: string,
    updatedAt: string,
}