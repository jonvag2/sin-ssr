import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { ConstruccionComponent } from './shared/construccion/construccion.component';

export const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import("./modules/home/HomeModule").then(m => m.HomeModule),
  },
  {
    path: "servicio",
    component: FooterComponent,
  },
  /* ,
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  } */
  {
    path: "construcion",
    component: ConstruccionComponent,
  },
  {
    path: '**',
    redirectTo: 'construcion',
    /* redirectTo: 'error/404', */
  }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
    ],
    exports:[
      RouterModule,
    ]
  })
export class AppRoutingModule { }
