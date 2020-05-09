import { Component, OnInit } from '@angular/core';
import { MedService } from '../core/services/med.service';
import { Activity } from '../core/models/activity.model';
import { environment } from '../../environments/environment';
import {TitleTagService} from '../core/services/title-tag.service';

@Component({
  selector: 'med-academic-activity',
  templateUrl: './academic-activity.component.html',
  styleUrls: ['./academic-activity.component.scss']
})
export class AcademicActivityComponent implements OnInit {

  Math = Math;

  isLoading: boolean;
  activities: Activity[];
  uploadURL = environment.api.uploadURL;

  constructor(private api: MedService,
              private tagService: TitleTagService) { }

  ngOnInit() {
    this.isLoading = false;
    this.getActivities();
    this.tagService.setTitle('Activités Académiques | Dr. Sofiene Kallel - Orthopédiste');
    this.tagService.setSocialMediaTags(
      `${this.tagService.baseLink}#/academic-activity`,
      `Activités Académiques | Dr. Sofiene Kallel - Orthopédiste`,
      // tslint:disable-next-line:max-line-length
      `Chirurgien Orthopédiste, Professeur Agrégé en Chirurgie orthopédique et Traumatologie. Dr. Kallel est membre de sociétés savantes suivantes : Société Tunisienne de Chirurgie Orthopédique et Traumatologique. Association Tunisienne d’Etude et de recherche de l’Appareil Locomoteur. Société Tunisienne d’Informatique Médicale. American Academy of Orthopaedic Surgeons AAOS. Association Tunisienne de Médecine et de Chirurgie du Pied et de la cheville. Tunisian Society of Arthroscopy and sport Surgery (President) Société Tunisienne de Recherche en Orthopédie Traumatologie.`,
      `${this.tagService.baseLink}assets/82cd3514af45f71d7c8ffb6db6cd3e5e.jpg`
    );
  }

  getActivities() {
    this.isLoading = true;
    this.api.getActivityPosts().then(({data}) => {
      this.activities = data;
    }).catch(() => {
      console.error('Error!');
    }).finally(() => {
      this.isLoading = false;
    });
  }

}
