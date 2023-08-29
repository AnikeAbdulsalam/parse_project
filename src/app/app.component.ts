import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

text = "";
  onSave() {
    if (this.text == '') {
      console.log('this field is empty') 
    }
    else {
      console.log(this.text)
    }
  }
}
