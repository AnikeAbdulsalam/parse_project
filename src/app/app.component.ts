import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parse_project';

  onSave(text: String) {
    if (text == '') {
      console.log('this field is empty') 
    }
    else {
      console.log(text)
    }
  }
}
