import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    SignInComponent
  ],
  entryComponents: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    
  ],
  bootstrap: [SignInComponent]
})
export class SignInModule { }
