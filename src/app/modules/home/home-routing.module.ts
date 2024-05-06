import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ServicesComponent } from './pages/services/services.component';

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
  component: ServicesComponent,
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
