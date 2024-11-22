import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  color: string = 'green';

  clickHandler(colorValue: string): void {
    this.color = colorValue;
  }

  inputHandler(e: Event): void {
    const inputElement = e.target as HTMLInputElement;
    console.log(inputElement.value);
  }
}
