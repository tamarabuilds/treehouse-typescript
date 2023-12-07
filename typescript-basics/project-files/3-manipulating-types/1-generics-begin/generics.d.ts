export type Employee = {
    name: string,
    job: string
}

export type Manager = {
    name: string,
    manages: Person<Employee>[]
}

// Created a generic
export type Person<PersonType, DateType = string> = {
    createdAt: DateType,
    updatedAt: DateType,
    data: PersonType
}
