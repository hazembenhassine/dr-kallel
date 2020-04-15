import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../core/material/material.module';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { PaginatorComponent } from './paginator/paginator.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginatorComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        NgbCollapseModule
    ],
  exports: [
    HeaderComponent,
    MaterialModule,
    FooterComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
