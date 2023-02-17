import { Component } from '@angular/core'

@Component({
  selector: 'app-test',
  template: '<input type="text" [(ngModel)]="title">'
})
export class TestComponent {
  title = 'test.component works!'
}
