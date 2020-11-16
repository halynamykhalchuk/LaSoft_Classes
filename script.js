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
    fire(employee) {

        employee.workStatus = "unemployed";
        employee.salary = 0;
        this.employees.splice(this.employees.indexOf(employee), 1)
        this.empQuant = this.employees.length;
        arrSt.push(employee);
        arrSt.sort((prev, next) => next.rate - prev.rate);

    }
    close() {
        this.employees.forEach(employee => {
            this.fire(employee);
        })
    }
}

let arrSt = [{
        name: "Halyna",
        sname: "Mykhalchuk",
        university: "Ivan Franko National University of Lviv",
        rate: 4.4
    },
    {
        name: "Pavlo",
        sname: "Pomirko",
        university: "Ivan Franko National University of Lviv",
        rate: 3.7
    },
    {
        name: "Mariia",
        sname: "Lys",
        university: "Ivan Franko National University of Lviv",
        rate: 5.0
    },
    {
        name: "Mariia",
        sname: "Baran",
        university: "Ivan Franko National University of Lviv",
        rate: 4.5
    },
    {
        name: "Ihor",
        sname: "Chornyi",
        university: "Ivan Franko National University of Lviv",
        rate: 3.3
    },
    {
        name: "Liubomyr",
        sname: "Opanovych",
        university: "Lviv Polytechnic",
        rate: 4.2
    },
    {
        name: "Nazarii",
        sname: "Maidan",
        university: "Ivan Franko National University of Lviv",
        rate: 4.2
    },
    {
        name: "Kseniia",
        sname: "Zadvorna",
        university: "Ivan Franko National University of Lviv",
        rate: 4.3
    },
    {
        name: "Anna",
        sname: "Liednikova",
        university: "Taras Shevchenko National University of Kyiv",
        rate: 4.8
    },
    {
        name: "Ivan",
        sname: "Mykhalchuk",
        university: "National Aerospace University – Kharkiv Aviation Institute",
        rate: 5.0
    },
    {
        name: "Anastasiia",
        sname: "Shestak",
        university: "Lviv Polytechnic",
        rate: 3.2
    },
    {
        name: "Vladyslav",
        sname: "Naminas",
        university: "Taras Shevchenko National University of Kyiv",
        rate: 4.9
    },
    {
        name: "Dmytro",
        sname: "Teplos",
        university: "Taras Shevchenko National University of Kyiv",
        rate: 4.5
    },
    {
        name: "Alexandra",
        sname: "Snitsar",
        university: "Ukrainian Academy of Printing",
        rate: 4.7
    },
    {
        name: "Angelina",
        sname: "Gladysh",
        university: "Ukrainian Academy of Printing",
        rate: 4.0
    },
    {
        name: "Halyna",
        sname: "Kozak",
        university: "Ukrainian Academy of Printing",
        rate: 3.5
    },
    {
        name: "Hope",
        sname: "Kulyk",
        university: "Ivan Franko National University of Lviv",
        rate: 4.1
    },
    {
        name: "Maryna",
        sname: "Simakova",
        university: "Ivan Franko National University of Lviv",
        rate: 4.5
    },
    {
        name: "Alexadr",
        sname: "Denisenko",
        university: "National Aerospace University – Kharkiv Aviation Institute",
        rate: 4.2
    },
    {
        name: "Myroslava",
        sname: "Maziar",
        university: "Ivan Franko National University of Lviv",
        rate: 4.6
    }
];
arrSt.sort((prev, next) => next.rate - prev.rate);
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
    <tbody class="stTable">`
    for (let i = 0; i < arrSt.length; i++) {


        getEl('.stTable').innerHTML += `
      <tr>
        <th scope="row">${i+1}</th>
        <td>${arrSt[i].name}</td>
        <td>${arrSt[i].sname}</td>
        <td>${arrSt[i].university}</td>
        <td>${arrSt[i].rate}</td>
      </tr>`
    }

})

let arrComp = [
    new Company("Boing", "Aero-space engineering", []),
    new Company("Hilton Hotels", "Tourism", [])
]

getEl('.compBut').addEventListener('click', function () {

    getEl('.btnsEmpls_1').style.display = "block"
    getEl('.headEmpls_1').innerHTML = `
    <p class="text-monospace mt-5">
    Company: ${arrComp[0].name} <br>
    Practice: ${arrComp[0].practice}
    </p><br>
    `
    getEl('.tableEmpls_1').style.display = "block"


    getEl('.btnsEmpls_2').style.display = "block"
    getEl('.headEmpls_2').innerHTML = `
    <p class="text-monospace mt-5">
    Company: ${arrComp[1].name} <br>
    Practice: ${arrComp[1].practice}
    </p><br>
    `
    getEl('.tableEmpls_2').style.display = "block"


})
let i = 0


getEl('.hire_1').addEventListener('click', function () {

    let proff = prompt('Enter profession for candidate')
    if (proff == '' || proff == null) {
        alert('Incorrect incoming. Check profession')
    } else {
        let candidate = arrSt.shift()
        arrComp[0].hire(candidate, proff)
        let tr = document.createElement('tr');
        tr.dataset.idEmpl = candidate.sname
        let tdName = document.createElement('td');
        tdName.innerHTML = candidate.name;
        tr.appendChild(tdName);
        let tdSname = document.createElement('td');
        tdSname.innerHTML = candidate.sname;
        tr.appendChild(tdSname);
        let tdProff = document.createElement('td');
        tdProff.innerHTML = proff;
        tr.appendChild(tdProff);
        let tdAction = document.createElement('td');
        let btnFire = document.createElement('button');
        btnFire.innerText = 'Fire'
        btnFire.setAttribute('type', 'button')
        btnFire.setAttribute('class', 'btn')
        btnFire.classList.add('btn-danger')
        btnFire.classList.add(`fire_c1`)
        tdAction.appendChild(btnFire)
        tr.appendChild(tdAction)
        getEl('.tbodyEmpls_1').appendChild(tr);


        getEl('.stdBut').innerText = "Refresh student's list"
    }
    getEl('.fire_c1').addEventListener('click', function () {
        surname = this.dataset.idEmpl;

        for (let i = 0; i < arrComp[0].employees.length; i++) {
            if (arrComp[0].employees[i]["sname"] === surname) {
                arrComp[0].fire(arrComp[0].employees[i]);
                getEl(`tr[data-id-empl="${this.dataset.idEmpl}"]`).remove();
            }
        }

    });
})

getEl('.hire_2').addEventListener('click', function () {

    let proff = prompt('Enter profession for candidate')
    if (proff == '' || proff == null) {
        alert('Incorrect incoming. Check profession')
    } else {
        let candidate = arrSt.shift()
        arrComp[1].hire(candidate, proff)
        let tr = document.createElement('tr');
        tr.dataset.idEmpl = candidate.sname
        let tdName = document.createElement('td');
        tdName.innerHTML = candidate.name;
        tr.appendChild(tdName);
        let tdSname = document.createElement('td');
        tdSname.innerHTML = candidate.sname;
        tr.appendChild(tdSname);
        let tdProff = document.createElement('td');
        tdProff.innerHTML = proff;
        tr.appendChild(tdProff);
        let tdAction = document.createElement('td');
        let btnFire = document.createElement('button');
        btnFire.innerText = 'Fire'
        btnFire.setAttribute('type', 'button')
        btnFire.setAttribute('class', 'btn')
        btnFire.classList.add('btn-danger')
        btnFire.classList.add(`fire_c2`)
        tdAction.appendChild(btnFire)
        tr.appendChild(tdAction)
        getEl('.tbodyEmpls_2').appendChild(tr);


        getEl('.stdBut').innerText = "Refresh student's list"
    }
    getEl('.fire_c2').addEventListener('click', function () {
        surname = this.dataset.idEmpl;

        for (let i = 0; i < arrComp[1].employees.length; i++) {
            if (arrComp[1].employees[i]["sname"] === surname) {
                arrComp[1].fire(arrComp[0].employees[i]);
                getEl(`tr[data-id-empl="${this.dataset.idEmpl}"]`).remove();
            }
        }

    });
})
getEl('.show_1').addEventListener('click', function () {
    for (let i = 0; i < arrComp[0].employees.length; i++) {

    }
})



getEl('close_1').addEventListener('click', function(){
    arrComp[0].close()
})

getEl('close_2').addEventListener('click', function(){
    arrComp[1].close()
})