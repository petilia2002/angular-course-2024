import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTemplatesComponent } from './learn-templates.component';

describe('LearnTemplatesComponent', () => {
  let component: LearnTemplatesComponent;
  let fixture: ComponentFixture<LearnTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
