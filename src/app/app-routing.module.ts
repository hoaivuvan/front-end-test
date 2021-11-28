import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapboxComponent } from './mapbox/mapbox.component';
import { SignInModule } from './sign-in/sign-in.module';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'map', component: MapboxComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
