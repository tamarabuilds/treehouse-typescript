const tim = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    age: 2,
    data: {
        name: 'Tim',
        job: 'Security'
    }
};
const jack = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    data: {
        name: 'jack',
        job: 'Receptionist'
    }
};
const anna = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: 'anna',
        manages: [tim, jack]
    }
};
;
export {};
