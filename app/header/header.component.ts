import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(CoronaDialog);
  }
  openWhiteFungusDialog(){
    this.dialog.open(WhiteFungusDialog);
  }
  openBlackFungusDialog(){
    this.dialog.open(BlackFungusDialog)
  }
 

}
@Component({
  selector: 'corona-dialog',
  templateUrl: './corona.component.html',
})
export class CoronaDialog {
}

@Component({
  selector: 'whitefungus-dialog',
  templateUrl: './whitefungus.component.html',
})
export class WhiteFungusDialog {}

@Component({
  selector: 'black-dialog',
  templateUrl: './blackfungus.component.html',
})
export class BlackFungusDialog {}
