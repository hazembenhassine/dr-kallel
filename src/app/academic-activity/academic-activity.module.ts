import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicActivityRoutingModule } from './academic-activity-routing.module';
import { AcademicActivityComponent } from './academic-activity.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AcademicActivityComponent],
  imports: [
    CommonModule,
    AcademicActivityRoutingModule,
    SharedModule
  ]
})
export class AcademicActivityModule { }
