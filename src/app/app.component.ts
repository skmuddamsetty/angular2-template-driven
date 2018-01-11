import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitForm(ngForm: NgForm) {
    console.log('Entered Email Address: -  ' + ngForm.value.email + ' - Entered Password - ' + ngForm.value.password);
    // You can use the obtained email address and password to perform operations according to the business.
  }
}
