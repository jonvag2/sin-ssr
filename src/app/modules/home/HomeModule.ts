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
import { OurPurposeComponent } from './components/our-purpose/our-purpose.component';
import { MessageComponent } from './components/message/message.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { UneteComponent } from './components/unete/unete.component';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        OurserviceComponent,
        OurPurposeComponent,
        MessageComponent,
        HeaderComponent,
        NavComponent,
        WhoAreWeComponent,
        UneteComponent,
        FooterComponent,
        ConstruccionComponent,
        MethodComponent
    ]
})
export class HomeModule {
}
