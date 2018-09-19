import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {CodeComponent} from './code/code.component';
import {ProjectComponent} from './project/project.component';
import {AdcComponent} from './project/adc/adc.component';
import {SauaComponent} from './project/saua/saua.component';
import {TdtComponent} from './project/tdt/tdt.component';
import {CplusComponent}from './project/cplus/cplus.component';
import {RadialComponent} from './project/radial/radial.component';
const mypaths:Routes= [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent,  children:[{path:'adc',component:AdcComponent,outlet:'tcs'},
  {path:'saua',component:SauaComponent,outlet:'tcs'},  {path:'tdt',component:TdtComponent,outlet:'tcs'},  {path:'cplus',component:CplusComponent,outlet:'tcs'},  {path:'radial',component:RadialComponent,outlet:'infy'}]},

  {path:'about',component:AboutComponent},
   {path:'code',component:CodeComponent},
   
]

@NgModule({
  imports: [RouterModule.forRoot(mypaths)],
  exports:[RouterModule]
})

export class AppRoutingModule {
 }
