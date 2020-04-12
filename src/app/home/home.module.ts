import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactComponent } from './contact/contact.component';
import {MaterialModule} from '../core/material/material.module';
import {AgmCoreModule} from '@agm/core';
import { SpecialtyDetailsComponent } from './specialty-details/specialty-details.component';


@NgModule({
  declarations: [HomeComponent, QuoteComponent, ContactComponent, SpecialtyDetailsComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    AgmCoreModule
  ],
  entryComponents: [
    SpecialtyDetailsComponent
  ]
})
export class HomeModule { }
