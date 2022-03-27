import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})

export class SessionService {

  getEmployees() {
    let emp = localStorage.getItem('employees');
    if (emp) JSON.parse(emp);
    return
  }

  addEmployee(newEmp: any) {
    let emps = [];
    let e: any = localStorage.getItem('employees');
    if (e !== null || e != undefined) emps = JSON.parse(e);
    emps.push(newEmp);
    localStorage.setItem('employees', JSON.stringify(emps));
  }

  deleteEmployee(id: any) {
    let e: any = localStorage.getItem('employees');
    let emps = JSON.parse(e);
    emps.map((res: any) => {
      if (res._id == id) {
        emps.splice(res._id, 1);
      }
    })
    localStorage.setItem('employees', JSON.stringify(emps));
  }

  updateEmployee(oldEmp: any, newEmp: any) {
    let e: any = localStorage.getItem('employees');
    let emps = JSON.parse(e);
    for (let i = 0; i < emps.length; i++) {
      if (emps[i]._id == oldEmp) {
        emps[i] = newEmp;
      }
    }
    localStorage.setItem('employees', JSON.stringify(emps));
  }

  


}
