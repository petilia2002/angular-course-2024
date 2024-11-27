import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-learn-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-directives.component.html',
  styleUrl: './learn-directives.component.css',
})
export class LearnDirectivesComponent {
  isShow: boolean = true;
  arr: Array<string> = ['One', 'Two', 'Three', 'Four', 'Five'];
  users: Array<User> = [
    { name: 'John Doe', age: 32 },
    { name: 'Mary Smith', age: 23 },
    { name: 'Barbara Techer', age: 16 },
    { name: 'Piter Parker', age: 13 },
    { name: 'Kira Knightly', age: 17 },
  ];
}
