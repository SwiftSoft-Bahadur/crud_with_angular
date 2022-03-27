import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-store-emp',
  templateUrl: './store-emp.component.html',
  styleUrls: ['./store-emp.component.css']
})
export class StoreEmpComponent implements OnInit {

  id: any;
  //create form group object
  addressForm = this.fb.group({
    name: [null, Validators.required],
    age: [null, Validators.required],
    department: [null, Validators.required],
    blood: [null, Validators.required],
    address1: [null, Validators.required],
    address2: [null, Validators.required],
    contact1: [null, Validators.required],
    contact2: [null, Validators.required],
  });

  //inject services
  constructor(private fb: FormBuilder,
    private sessionSer: SessionService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.edit();
  }

  //Store Employees
  onSubmit(): void {
    let Ref = this.addressForm.value;

    let ObjRef = {

      _id: new Date().getTime() + Math.random().toString(36).substr(2),
      name: Ref.name,
      age: Ref.age,
      department: Ref.department,
      blood: Ref.blood,
      address1: Ref.address1,
      address2: Ref.address2,
      contact1: Ref.contact1,
      contact2: Ref.contact2,
    }
    this.sessionSer.addEmployee(ObjRef)
    this.addressForm.reset();
  }

  //edit employees
  // edit() {
  //   this._activatedRoute.params.subscribe((params) => {
  //     this.id = params['_id'];
  //     let e: any = localStorage.getItem('employees');
  //     let empsArr = JSON.parse(e);

  //     empsArr.forEach((Ref: any) => {
  //       this.addressForm.setValue({
  //         name: Ref.name,
  //         age: Ref.age,
  //         department: Ref.department,
  //         blood: Ref.blood,
  //         address1: Ref.address1,
  //         address2: Ref.address2,
  //         contact1: Ref.contact1,
  //         contact2: Ref.contact2,
  //       })
  //     });

  //   })
  // }


  // update employees
  onUpdate() {

    let Ref = this.addressForm.value;
    let ObjRef = {
      _id: new Date().getTime() + Math.random().toString(36).substr(2),
      name: Ref.name,
      age: Ref.age,
      department: Ref.department,
      blood: Ref.blood,
      address1: Ref.address1,
      address2: Ref.address2,
      contact1: Ref.contact1,
      contact2: Ref.contact2,
    }

    this.sessionSer.updateEmployee(this.id, ObjRef);

  }
}
