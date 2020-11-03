//Classes creating

class Student {
    constructor(name, sname, university, rate){
        this.name = name;
        this.sname = sname;
        this.university = university;
        this.rate = rate;
    }
}

class Employee extends Student {
    constructor (name, sname, university, rate, status, proff, salary){
        super(name, sname, university, rate);
        this.status = status;
        this.proff = proff;
        this.salary = salary;
        this.history = [];
    }
}

class Company {
    constructor(name, practice, employees){
        this.name = name;
        this.practice = practice;
        this.employees = employees;
        this.empQuant = employees.length;
    }
}

