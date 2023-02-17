import { Component } from '@angular/core'

@Component({
  selector: 'app-test',
  template: '<mycomponent [ikey]="mycomponentkey">My Component</mycomponent>'
})
export class TestComponent {
    mycomponentkey: string
}
