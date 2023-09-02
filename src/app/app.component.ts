import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text2: any = "";
  text = "";
    onClick() {
      this.text2.UpperCasePipe(); = this.text
    }



}
