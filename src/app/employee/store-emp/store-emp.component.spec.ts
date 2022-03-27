import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { StoreEmpComponent } from './store-emp.component';

describe('StoreEmpComponent', () => {
  let component: StoreEmpComponent;
  let fixture: ComponentFixture<StoreEmpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEmpComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
