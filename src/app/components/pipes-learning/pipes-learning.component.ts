import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CutPipe } from '../../pipes/cut/cut.pipe';
import { User } from '../../models/user';
import { SortPipe } from '../../pipes/sort/sort.pipe';

@Component({
  selector: 'app-pipes-learning',
  standalone: true,
  imports: [CommonModule, CutPipe, SortPipe],
  templateUrl: './pipes-learning.component.html',
  styleUrl: './pipes-learning.component.css',
})
export class PipesLearningComponent {
  title: string = 'Angular Course';
  user: User = {
    name: 'John Doe',
    age: 30,
  };
  date: Date = new Date();
  users: Array<User> = [
    { name: 'John Doe', age: 30 },
    { name: 'Ilya Petrenkov', age: 22 },
    { name: 'Mary Smith', age: 25 },
  ];

  constructor() {
    setTimeout(() => {
      // this.users.push({
      //   name: 'Alexander Johnson',
      //   age: 28,
      // });
      this.users = [...this.users, { name: 'Alexander Johnson', age: 28 }];
    }, 3000);
  }
}
