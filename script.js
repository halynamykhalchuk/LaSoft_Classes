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
                    arrHistory[i].sort();
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
    setSalaryForWorker (employee){
        employee.salary = (employee.rate/100)*10000;
    }
    hire(student, proff){
        let employee = new Employee(student.name, student.sname, student.university, student.rate, "employed", proff);
        this.employees.push(employee);
        this.empQuant = this.employees.length;
        this.setSalaryForWorker(employee);
    }
    fire(employee, endDate){
        employee.workStatus = "unemployed";
        employee.salary = 0;
        employee.updateHistory([this.name, endDate, employee.start]);
        delete employee.start;
    }
    close(){
        this.workers.forEach(employee => {
            this.fire(employee);
        })     
    }
}