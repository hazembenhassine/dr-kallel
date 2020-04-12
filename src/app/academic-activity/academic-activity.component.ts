import { Component, OnInit } from '@angular/core';
import { MedService } from '../core/services/med.service';
import { Activity } from '../core/models/activity.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'med-academic-activity',
  templateUrl: './academic-activity.component.html',
  styleUrls: ['./academic-activity.component.scss']
})
export class AcademicActivityComponent implements OnInit {

  Math = Math;

  isLoading: boolean;
  activities: Activity[];
  backendURL = environment.api.backendURL;

  constructor(private api: MedService) { }

  ngOnInit() {
    this.isLoading = false;
    this.getActivities();
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
