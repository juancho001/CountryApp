import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CoutryPagesComponent } from './pages/coutry-pages/coutry-pages.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CoutryPagesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
