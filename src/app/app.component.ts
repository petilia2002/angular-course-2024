import { Component } from '@angular/core';
import { LearnDirectivesComponent } from './components/learn-directives/learn-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearnDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-course-2024';
}
