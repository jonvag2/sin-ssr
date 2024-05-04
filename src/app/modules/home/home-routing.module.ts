import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
 },
 {
  path: "hola",
  component: HeaderComponent,
 },
 {
  path: "services",
  component: OurserviceComponent,
  },
  {
    path: '**',
    /* redirectTo: 'error/404', */
    redirectTo: '',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
