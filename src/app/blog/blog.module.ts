import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {SharedModule} from '../shared/shared.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [BlogComponent, PostComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ]
})
export class BlogModule { }
