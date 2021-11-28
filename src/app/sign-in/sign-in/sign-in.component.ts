import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInData: { email: string; password: string; } = { email: '', password: '' };
  isSaving: boolean = false;

  constructor(protected service: SignInService,
    protected router: Router,
    protected spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.isSaving = true;
    this.spinner.show();
    this.service.signIn(this.signInData).subscribe(result => {
      this.isSaving = false;
      this.spinner.hide();
      this.router.navigateByUrl("/map");
    });
  }
}
