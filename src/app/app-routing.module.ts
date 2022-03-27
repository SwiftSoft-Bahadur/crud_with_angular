import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreEmpComponent } from './employee/store-emp/store-emp.component';
import { ViewEmpComponent } from './employee/view-emp/view-emp.component';

const routes: Routes = [
  {
    path: "", component: AppComponent, children: [
      { path: '', component: ViewEmpComponent },
      { path: 'store', component: StoreEmpComponent },
      { path: ':id', component: StoreEmpComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
