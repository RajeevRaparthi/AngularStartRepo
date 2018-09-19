import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSliderModule,  MatTableModule,  MatExpansionModule } from '@angular/material';
        
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { CodeComponent } from './code/code.component';
import { ProjectComponent } from './project/project.component';
import { AdcComponent } from './project/adc/adc.component';
import { SauaComponent } from './project/saua/saua.component';
import { TdtComponent } from './project/tdt/tdt.component';
import { CplusComponent } from './project/cplus/cplus.component';
import { RadialComponent } from './project/radial/radial.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    CodeComponent,
    ProjectComponent,
    AdcComponent,
    SauaComponent,
    TdtComponent,
    CplusComponent,
    RadialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,MatTableModule,  MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
