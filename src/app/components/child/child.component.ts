import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input('color') color: string = 'tomato';
  @Input() name: string;

  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  handlerClick() {
    this.name = 'Mary Smith';
    this.nameChange.emit(this.name);
  }
}
