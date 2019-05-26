import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  InvoiceDialogComponent
} from './invoice-dialog.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  BankSearchPipe
} from './../../pipes/bank-search.pipe';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatDialogRef,
} from '@angular/material';


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
          MatRadioModule

        ],
        providers: [{
            provide: BankSearchPipe
          },
          {
            provide: MatDialogRef
          }
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
