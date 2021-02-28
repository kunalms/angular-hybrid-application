import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() dateOfBirth: Date | undefined;
  @Output() dateOfBirthChange = new EventEmitter<Date>();

  dateOfBirthInput: FormControl = new FormControl(new Date(), Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  updateDateOfBirth($event: MatDatepickerInputEvent<any, any>) {
    if ($event.value) {
      this.dateOfBirth = $event.value;
      this.dateOfBirthChange.emit($event.value);
    }
  }
}
