export interface Company {
    id: Number,
    name: String,
    description: String,
    city: String,
    address: String
}

export interface AuthToken {
    token: string
}

export interface Vacancy {
    id: Number,
    name: String,
    description: String,
    salary: Number,
    company: Number
}