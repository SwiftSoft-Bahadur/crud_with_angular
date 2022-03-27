import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getItem()
  }

  deleteUser(id: any) {
    this.userService.removeUser(id);
  }

  edit(Ref: any) {
    this.userService.addressForm.setValue({
      name: Ref.name,
      age: Ref.age
    })

  }

}
