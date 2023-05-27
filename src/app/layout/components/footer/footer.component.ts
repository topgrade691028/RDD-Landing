import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MobileVersionComponent} from "../../../shared/dialogs/mobile-version/mobile-version.component";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  downloadApp(value: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      value
    };
    this.matDialog.open(MobileVersionComponent, dialogConfig);
  }

}
