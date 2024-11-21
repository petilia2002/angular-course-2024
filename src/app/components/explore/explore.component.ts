import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  title: string = 'Angular Course';
  user = {
    name: 'Ilya',
    age: 22,
  };

  hint: string = 'Подсказка к ссылке';
  cssClass: string = 'blue';
  inlineStyles = {
    background: 'coral',
    color: 'green',
  };
  fontSize: number = 32;
}
