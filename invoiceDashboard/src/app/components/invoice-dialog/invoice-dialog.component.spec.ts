import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import {InvoiceDialogComponent } from './invoice-dialog.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BankSearchPipe } from './../../pipes/bank-search.pipe';
import {MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatNativeDateModule,
  MatExpansionModule
} from '@angular/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InvoiceDialogComponent', () => {
  let component: InvoiceDialogComponent;
  let fixture: ComponentFixture < InvoiceDialogComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [InvoiceDialogComponent, BankSearchPipe],

        imports: [
          FormsModule, ReactiveFormsModule,
          MatTabsModule,
          MatDialogModule,
          MatDatepickerModule,
          MatInputModule,
          MatSlideToggleModule,
          MatGridListModule,
          MatRadioModule,
          HttpClientTestingModule,
          MatNativeDateModule,
          MatExpansionModule,
          BrowserAnimationsModule,
          StoreModule.forRoot({})

        ],
        providers: [{
            provide: BankSearchPipe
          },
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          MatNativeDateModule
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
