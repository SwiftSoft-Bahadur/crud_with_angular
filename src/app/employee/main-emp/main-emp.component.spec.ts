import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmpComponent } from './main-emp.component';

describe('MainEmpComponent', () => {
  let component: MainEmpComponent;
  let fixture: ComponentFixture<MainEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
