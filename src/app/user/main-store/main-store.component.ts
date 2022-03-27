import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-main-store',
  templateUrl: './main-store.component.html',
  styleUrls: ['./main-store.component.css']
})
export class MainStoreComponent implements OnInit {

  constructor(public userService: UserService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params);
    })
   }
  id: any
  ngOnInit(): void {
   
  }

  onSubmit() {
    let Ref = this.userService.addressForm.value;

    let ObjRef = {
      _id: Math.random().toString(36).slice(1, 10),
      name: Ref.name,
      age: Ref.age,
    }
    this.userService.addUser(ObjRef)
    this.userService.addressForm.reset();
  }


  update() {
    let Ref = this.userService.addressForm.value;
    if (this.id == Ref._id) {
      let ObjRef = {
        _id:this.id,
        name: Ref.name,
        age: Ref.age,
      }
      this.userService.updateEmployee(this.id, ObjRef)
    }

  }
}
