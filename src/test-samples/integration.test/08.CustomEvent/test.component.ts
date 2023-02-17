import { Component } from '@angular/core'

@Component({
  selector: 'app-test',
  template: '<mycomponent (ievent)="onMyComponentEvent($event)">My Component</mycomponent>'
})
export class TestComponent {
  onMyComponentEvent(data: any) {
    // do somthing
  }
}
