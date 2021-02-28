import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ], exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    DatePickerComponent
  ]
})
export class SharedModule {
}
