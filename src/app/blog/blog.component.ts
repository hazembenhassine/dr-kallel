import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Blog } from '../core/models/blog.model';
import {MedService} from '../core/services/med.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'med-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Math = Math;

  pageIndex: number;
  pageSize: number;
  size: number;

  isLoading: boolean;
  blogPosts: Blog[];
  backendURL = environment.api.backendURL;

  constructor(private api: MedService) { }

  ngOnInit() {
    this.isLoading = false;
    this.pageSize = 4;
    this.pageIndex = 0;
    this.size = 0;

    this.getBlogPosts();
  }

  getBlogPosts(event?: PageEvent) {
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    this.isLoading = true;
    this.api.getBlogPosts(this.pageSize * this.pageIndex, this.pageSize).then(({data, total}) => {
      this.blogPosts = data;
      this.size = total;
    }).catch(() => {
      console.error('Error!');
    }).finally(() => {
      this.isLoading = false;
    });
  }

  sanitize(str: string) {
    return str.replace(/<[^>]*>/g, '');
  }

}
