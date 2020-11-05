//Classes creating + methods

class Student {
    constructor(name, sname, university, rate) {
        this.name = name;
        this.sname = sname;
        this.university = university;
        this.rate = rate;
    }
    getBaseInfo() {
        return "Student's name: " + this.name +
            " \nStudent's surname: " + this.sname +
            " \nUniversity: " + this.university +
            " \nStudent's rate: " + this.rate;
    }
}


class Employee extends Student {
    constructor(name, sname, university, rate, status, proff, salary) {
        super(name, sname, university, rate);
        this.status = status;
        this.proff = proff;
        this.salary = salary;
        this._history = [];

        Object.defineProperty(this, "history", {
            set: function (recruitHist) {
                let workPlace = {};
                for (let i = 0; i < recruitHist.length; i++) {
                    recruitHist[i].sort();
                    companyExp = {
                        "workPlace": recruitHist[i][2],
                        "start": recruitHist[i][0],
                        "end": recruitHist[i][1]
                    }
                    this._history.push(workPlace);
                }
            },
            get: function () {
                return this._history;
            }
        })
    }

    updateHistory(history) {
        this.history = history;
    }

    getWorkingInfo() {
        return "Emloyee's name: " + this.name +
            " \nEmloyee's surname: " + this.sname +
            " \nEmloyee's profession: " + this.proff +
            " \nRecruitment history: " + this.history;
    }

}





class Company {
    constructor(name, practice, employees) {
        this.name = name;
        this.practice = practice;
        this.employees = employees;
        this.empQuant = employees.length;
    }
    setSalaryForWorker(employee) {
        employee.salary = (employee.rate / 100) * 10000;
    }
    hire(student, proff) {
        let employee = new Employee(student.name, student.sname, student.university, student.rate, "employed", proff);
        this.employees.push(employee);
        this.empQuant = this.employees.length;
        this.setSalaryForWorker(employee);
    }
    fire(employee, endDate) {
        employee.workStatus = "unemployed";
        employee.salary = 0;
        employee.updateHistory([this.name, endDate, employee.start]);
        delete employee.start;
    }
    close() {
        this.workers.forEach(employee => {
            this.fire(employee);
        })
    }
}

let arrSt = [
    new Student("Halyna", "Mykhalchuk", "Ivan Franko National University of Lviv", 4.2),
    new Student("Pavlo", "Pomirko", "Ivan Franko National University of Lviv", 3.7),
    new Student("Mariia", "Lys", "Ivan Franko National University of Lviv", 5.0),
    new Student("Mariia", "Baran", "Ivan Franko National University of Lviv", 4.5),
    new Student("Ihor", "Chornyi", "Ivan Franko National University of Lviv", 3.3),
    new Student("Liubomyr", "Opanovych", "Lviv Polytechnic", 4.2),
    new Student("Nazarii", "Maidan", "Ivan Franko National University of Lviv", 4.2),
    new Student("Kseniia", "Zadvorna", "Ivan Franko National University of Lviv", 4.2),
    new Student("Anna", "Liednikova", "Taras Shevchenko National University of Kyiv", 4.8),
    new Student("Ivan", "Mykhalchuk", "National Aerospace University – Kharkiv Aviation Institute", 5.0),
    new Student("Anastasiia", "Shestak", "Lviv Polytechnic", 3.2),
    new Student("Vladyslav", "Naminas", "Taras Shevchenko National University of Kyiv", 4.9),
    new Student("Dmytro", "Teplos", "Taras Shevchenko National University of Kyiv", 4.5),
    new Student("Alexandra", "Snitsar", "Ukrainian Academy of Printing", 4.5),
    new Student("Angelina", "Gladysh", "Ukrainian Academy of Printing", 4.0),
    new Student("Iryna", "Mutko", "Ukrainian Academy of Printing", 4.2),
    new Student("Halyna", "Kozak", "Ukrainian Academy of Printing", 3.5),
    new Student("Hope", "Kulyk", "Ivan Franko National University of Lviv", 4.2),
    new Student("Maryna", "Simakova", "Ivan Franko National University of Lviv", 4.5),
    new Student("Alexadr", "Denisenko", "National Aerospace University – Kharkiv Aviation Institute", 4.2),
    new Student("Andrii", "Pankiv", "Ivan Franko National University of Lviv", 3.2),
    new Student("Myroslava", "Maziar", "Ivan Franko National University of Lviv", 4.6)
];

let getEl = (a) => document.querySelector(a);
getEl('.stdBut').addEventListener('click', function () {
    getEl('.stdList').innerHTML = `<table class="table stdList">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">University</th>
        <th scope="col">Rate</th>
      </tr>
    </thead>
    <tbody>`
for (let i = 0; i < arrSt.length; i++) {
    
        
        getEl('tbody').innerHTML += `
      <tr>
        <th scope="row">${i+1}</th>
        <td>${arrSt[i].name}</td>
        <td>${arrSt[i].sname}</td>
        <td>${arrSt[i].university}</td>
        <td>${arrSt[i].rate}</td>
      </tr>`}
      getEl('.stdBut').disabled = true;
      })
      
