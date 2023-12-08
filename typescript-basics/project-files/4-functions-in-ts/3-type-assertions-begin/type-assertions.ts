const myButton = document.querySelector('.main-button') as HTMLButtonElement;

if (myButton) myButton.click();

let ken: Employee = {
    name: 'Ken',
    job: 'dancer',
}

let john = ken as TeamLead;