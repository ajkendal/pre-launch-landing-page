import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.scss']
})
export class EmailValidatorComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isEmailValid = null;
  emailValid = new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]);
  

  onSubmit() {
    if (this.emailValid.invalid){
      this.isEmailValid = false;

      return this.emailValid;
    }
    else {
      location.reload();
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
