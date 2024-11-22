import { Component } from '@angular/core';
import { ExploreComponent } from './components/explore/explore.component';
import { PipesLearningComponent } from './components/pipes-learning/pipes-learning.component';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-course-2024';
}
