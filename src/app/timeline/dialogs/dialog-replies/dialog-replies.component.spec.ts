import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogRepliesComponent } from './dialog-replies.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material';


// describe('DialogRepliesComponent', () => {
//   let component: DialogRepliesComponent;
//   let fixture: ComponentFixture<DialogRepliesComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DialogRepliesComponent],
//       schemas: [
//         CUSTOM_ELEMENTS_SCHEMA,
//         NO_ERRORS_SCHEMA
//       ],
//       imports:[BrowserModule,//was CommonModule
//         ReactiveFormsModule, //was FormsModule
//         FormsModule,
//         ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
//         BrowserAnimationsModule, // required animations module
//         RouterTestingModule,
//       HttpClientModule,
//         ToastrModule.forRoot({
//           timeOut: 3000,
//           easeTime: 300,
//           positionClass: 'toast-bottom-center',
//           preventDuplicates: true,
//             }),
//           MatSnackBarModule,
//         MatDialogModule],
//         providers: [
//           {provide: MatDialogRef, useValue: {}},{ provide: MAT_DIALOG_DATA, useValue: {} }
//        ],


//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DialogRepliesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
