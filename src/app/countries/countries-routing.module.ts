import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CoutryPagesComponent } from './pages/coutry-pages/coutry-pages.component';

const routes : Routes = [
{
path:'by-capital',
component: ByCapitalPagesComponent,
},
{
path:'by-country',
component: ByCountryPagesComponent,
},
{
path:'by-region',
component: ByRegionPagesComponent,
},
{
path:'by/:id',
component: CoutryPagesComponent,
}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }

