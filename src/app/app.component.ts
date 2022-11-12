import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soda-test-karma-samples';
  text1 = "";
  text2 = "";

  onClearClicked() {
    this.text1=this.text2=""
  }
}
