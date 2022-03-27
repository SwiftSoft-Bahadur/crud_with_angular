import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder) { }

  //common factors
  userRef: any[] = [];

  getItem() {
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  addressForm = this.fb.group({
    name: [null, Validators.required],
    age: [null, Validators.required],
  });

  //Operations
  addUser(newUser: any) {
    if (this.getItem()) {
      this.userRef = this.getItem();
      this.userRef.push(newUser);
    }
    localStorage.setItem('user', JSON.stringify(this.userRef))
  }

  removeUser(id: any) {
    let emps = this.getItem()
    emps.map((res: any, i: any) => {
      if (res._id == id) {
        emps.splice(i, 1);
      }
    })
    localStorage.setItem('user', JSON.stringify(emps));
  }

  updateEmployee(id:any, newEmp:any) {
    let emps = this.getItem();
    for (let i = 0; i < emps.length; i++) {
      if (emps[i]._id == id) {
        emps[i] = newEmp;
      }
    }
    localStorage.setItem('user', JSON.stringify(emps));
  }


}
