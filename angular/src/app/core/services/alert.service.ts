import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private matSnackBar: MatSnackBar) { }

  show (message: string, action?: string) {
    this.matSnackBar.open(message, action? action: 'dismiss', {
      duration: 10000
    });
  }
}
