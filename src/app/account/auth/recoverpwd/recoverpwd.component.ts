import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-recoverpwd',
  templateUrl: './recoverpwd.component.html',
  styleUrls: ['./recoverpwd.component.scss']
})
export class RecoverpwdComponent implements OnInit {

   // set the currenr year
   year: number = new Date().getFullYear();

   resetForm: FormGroup;
   submitted = false;
   error = '';
   success = '';
   loading = false;

   constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    if (environment.defaultauth === 'firebase') {
      this.authenticationService.resetPassword(this.f.email.value).subscribe(
        data => {
          this.success = 'Reset password link sent to your email.';
          this.error = '';
        },
        error => {
          this.error = error ? error : '';
          this.success = '';
        });
    }
  }

  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      680: {
        items: 1
      },
    }
  }
}
