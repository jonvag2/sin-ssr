import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { OurserviceComponent } from "./components/ourservice/ourservice.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { NavComponent } from "../../shared/nav/nav.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ConstruccionComponent } from '../../shared/construccion/construccion.component';
import { MethodComponent } from "./components/method/method.component";



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        OurserviceComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        ConstruccionComponent,
        MethodComponent
    ]
})
export class HomeModule {
}
