import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard.component';
import {MatGridListModule, MatTableModule} from '@angular/material';


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { reducer } from 'src/app/store/reducers/invoice.reducer';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, Store ],
      imports: [ MatGridListModule, MatTableModule, StoreModule.forRoot({
        invoice: reducer
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
