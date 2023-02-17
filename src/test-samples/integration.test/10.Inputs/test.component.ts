import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-test',
  template: '<div>{{t1}}</div>'
})
export class TestComponent {
    @Input()
    t1: string
}