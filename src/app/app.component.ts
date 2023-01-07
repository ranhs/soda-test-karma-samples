import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  initText: string

  @Output()
  tellTheWorld = new EventEmitter<string>()

  title = 'soda-test-karma-samples';
  text1 = "";
  text2 = "";

  onClearClicked() {
    this.text1=this.text2=""
  }

  mycomponentkey: string
  onMyComponentEvent(data: any) {
    this.eventCalls.push(data)
    this.tellTheWorld.emit(data)
  }
  eventCalls = []
}

@Component({
  selector: 'mycomponent',
  template: '<div></div>',
})
export class MyComponentComponent {
  @Input()
  ikey: string

  @Output()
  ievent = new EventEmitter<string>()
}