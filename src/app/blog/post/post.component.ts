import { Component, OnInit } from '@angular/core';
import { Blog } from '../../core/models/blog.model';
import { MedService } from '../../core/services/med.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';
import {TitleTagService} from '../../core/services/title-tag.service';

@Component({
  selector: 'med-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  moment = moment;

  id: string;
  blogPost: Blog;

  uploadURL = environment.api.uploadURL;

  constructor(private api: MedService,
              private route: ActivatedRoute,
              private router: Router,
              private tagService: TitleTagService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBlogData();
  }

  getBlogData() {
    this.api.getBlogById(this.id).then(({item}) => {
      this.blogPost = item;
      this.tagService.setTitle(`${this.blogPost.title.trim()} | Dr. Sofiene Kallel - Orthopédiste`);
      this.tagService.setSocialMediaTags(
        `${this.tagService.baseLink}#/blog/post/${this.id}`,
        `${this.blogPost.title.trim()} | Dr. Sofiene Kallel - Orthopédiste`,
        this.sanitize(this.blogPost.content).slice(0, 150) + '...',
        this.uploadURL + this.blogPost.cover
      );
    }).catch(() => {
      console.log('Not found');
      this.router.navigateByUrl('/blog').then(() => {});
    });
  }

  sanitize(str: string) {
    return str.replace(/<[^>]*>/g, '');
  }

}
