import { Component, OnInit } from '@angular/core';
import {MedService} from '../core/services/med.service';
import {Router} from '@angular/router';
import {Specialty} from '../core/models/specialty.model';
import {environment} from '../../environments/environment';
import {MatDialog} from '@angular/material';
import {SpecialtyDetailsComponent} from './specialty-details/specialty-details.component';
import {TitleTagService} from '../core/services/title-tag.service';

@Component({
  selector: 'med-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  console = console;

  specialties: Specialty[];

  uploadURL = environment.api.uploadURL;

  constructor(private api: MedService,
              private router: Router,
              private dialog: MatDialog,
              private tagService: TitleTagService) { }

  ngOnInit() {
    this.getSpecialties();
    this.tagService.setTitle('Dr. Sofiene Kallel - Orthopédiste');
    this.tagService.setSocialMediaTags(
      `${this.tagService.baseLink}#/home`,
      `Dr. Sofiene Kallel - Orthopédiste`,
      // tslint:disable-next-line:max-line-length
      `Chirurgien Orthopédiste, Professeur Agrégé en Chirurgie orthopédique et Traumatologie. Dr. Kallel est membre de sociétés savantes suivantes : Société Tunisienne de Chirurgie Orthopédique et Traumatologique. Association Tunisienne d’Etude et de recherche de l’Appareil Locomoteur. Société Tunisienne d’Informatique Médicale. American Academy of Orthopaedic Surgeons AAOS. Association Tunisienne de Médecine et de Chirurgie du Pied et de la cheville. Tunisian Society of Arthroscopy and sport Surgery (President) Société Tunisienne de Recherche en Orthopédie Traumatologie.`,
      `${this.tagService.baseLink}assets/doctor-orthopedic.png`
    );
  }

  getSpecialties() {
    this.api.getSpecialties().then(({data}) => {
      this.specialties = data;
    }).catch(() => {
      console.error('ERROR!');
    });
  }

  getStyleFromURL(url: string) {
    return `url('${url}')`;
  }

  goTo(elm: HTMLElement) {
    elm.scrollIntoView({behavior: 'smooth'});
  }

  openSpecialty(specialty: Specialty) {
    this.dialog.open(SpecialtyDetailsComponent, {
      panelClass: 'custom-mat-dialog',
      disableClose: false,
      data: {
        detail: specialty
      }
    });
  }

  navigateTo(link: string) {
    console.log(link);
    this.router.navigateByUrl('/academic-activity').then(() => {});
  }

}
