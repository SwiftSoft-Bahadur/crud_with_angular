import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MainEmpComponent } from './employee/main-emp/main-emp.component';
import { StoreEmpComponent } from './employee/store-emp/store-emp.component';
import { ViewEmpComponent } from './employee/view-emp/view-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './user/main-view/main-view.component';
import { MainStoreComponent } from './user/main-store/main-store.component';
import { MainMainComponent } from './user/main-main/main-main.component'
@NgModule({
  declarations: [
    AppComponent,
    MainEmpComponent,
    StoreEmpComponent,
    ViewEmpComponent,
    MainViewComponent,
    MainStoreComponent,
    MainMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
