import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Specialty} from '../../core/models/specialty.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'med-specialty-details',
  templateUrl: './specialty-details.component.html',
  styleUrls: ['./specialty-details.component.scss']
})
export class SpecialtyDetailsComponent implements OnInit {

  backendURL = environment.api.backendURL;
  specialty: Specialty;

  constructor(private dialogRef: MatDialogRef<SpecialtyDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    if (!this.data.detail) {
      this.dialogRef.close();
    } else {
      this.specialty = this.data.detail;
    }
  }

}
