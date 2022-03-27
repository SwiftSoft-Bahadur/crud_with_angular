import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session/session.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  EMS: any = [];
  constructor(private sessionService: SessionService, private userService:UserService) { }
  ngOnInit(): void {
    let e = localStorage.getItem('employees');
    if (e) this.EMS = JSON.parse(e);
  }

  deleteEmployee(id: any) {
    this.sessionService.deleteEmployee(id);
  }

  edit(){
    this.userService.addressForm.valid;
  }
}
