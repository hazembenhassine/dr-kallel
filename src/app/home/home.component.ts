import { Component, OnInit } from '@angular/core';
import {MedService} from '../core/services/med.service';
import {Router} from '@angular/router';
import {Specialty} from '../core/models/specialty.model';
import {environment} from '../../environments/environment';
import {MatDialog} from '@angular/material';
import {SpecialtyDetailsComponent} from './specialty-details/specialty-details.component';

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
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getSpecialties();
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
