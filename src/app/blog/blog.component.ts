import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Blog } from '../core/models/blog.model';
import {MedService} from '../core/services/med.service';
import {PageEvent} from '@angular/material';
import {TitleTagService} from '../core/services/title-tag.service';

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
  uploadURL = environment.api.uploadURL;

  constructor(private api: MedService,
              private tagService: TitleTagService) { }

  ngOnInit() {
    this.isLoading = false;
    this.pageSize = 4;
    this.pageIndex = 0;
    this.size = 0;

    this.getBlogPosts();
    this.tagService.setTitle('Blog | Dr. Sofiene Kallel - Orthopédiste');
    this.tagService.setSocialMediaTags(
      `${this.tagService.baseLink}#/blog`,
      `Blog | Dr. Sofiene Kallel - Orthopédiste`,
      // tslint:disable-next-line:max-line-length
      `Chirurgien Orthopédiste, Professeur Agrégé en Chirurgie orthopédique et Traumatologie. Dr. Kallel est membre de sociétés savantes suivantes : Société Tunisienne de Chirurgie Orthopédique et Traumatologique. Association Tunisienne d’Etude et de recherche de l’Appareil Locomoteur. Société Tunisienne d’Informatique Médicale. American Academy of Orthopaedic Surgeons AAOS. Association Tunisienne de Médecine et de Chirurgie du Pied et de la cheville. Tunisian Society of Arthroscopy and sport Surgery (President) Société Tunisienne de Recherche en Orthopédie Traumatologie.`,
      `${this.tagService.baseLink}assets/6251.png`
    );
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
