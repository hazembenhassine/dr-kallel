import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicActivityComponent } from './academic-activity.component';

const routes: Routes = [{ path: '', component: AcademicActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicActivityRoutingModule { }
