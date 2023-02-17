import { Component } from '@angular/core'

@Component({
  selector: 'app-test',
  template: '<button (click)="onButtonClick()">'
})
export class TestComponent {
  count = 0
  onButtonClick() {
    this.count++
  }
}
