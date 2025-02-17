import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
  ],
  imports: [
    CommonModule,

  ],exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,


  ]
})
export class SharedModule { }
