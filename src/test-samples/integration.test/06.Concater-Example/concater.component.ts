import { Component } from '@angular/core'

@Component({
  selector: 'app-concater',
  template: `
    <input id="a1" type="text" [(ngModel)]="text1"><br>
    <input id="a2" type="text" [(ngModel)]="text2"><br>
    <div id="d1">{{text1}}{{text2}}</div>
  `
})
export class ConcaterComponent {
  text1=""
  text2=""
}
