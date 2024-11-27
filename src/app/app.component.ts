import { Component } from '@angular/core';
import { LearnTemplatesComponent } from './components/learn-templates/learn-templates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearnTemplatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-course-2024';
}
