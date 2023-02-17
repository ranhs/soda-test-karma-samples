import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-test',
  template: `<input type="text" [(ngModel)]="text1"><br>
             <button (click)="onSend()">Send</button>`
})
export class TestComponent {
    @Output()
    t1 = new EventEmitter<string>()

    text1: string

    onSend() {
        this.t1.emit(this.text1)
    }
}