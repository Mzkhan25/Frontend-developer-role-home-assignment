import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule, MatTableModule, MatDialogModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { AppstateService } from 'src/app/services/appstate.service';
import { StoreModule } from '@ngrx/store';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatGridListModule, MatTableModule, MatDialogModule, StoreModule.forRoot({})],
      providers: [AppstateService]
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
