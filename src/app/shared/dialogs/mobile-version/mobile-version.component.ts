import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-version',
  templateUrl: './mobile-version.component.html',
  styleUrls: ['./mobile-version.component.css',
  '../dialog.css']
})
export class MobileVersionComponent implements OnInit {
  forGooglePlay: boolean;

  constructor(public dialogRef: MatDialogRef<MobileVersionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.forGooglePlay = this.data.value;
  }

  ngOnInit(): void {
  }

  closeDialog(result?: any): void {
    this.dialogRef.close(result);
  }
}
