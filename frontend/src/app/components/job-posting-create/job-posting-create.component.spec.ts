import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingCreateComponent } from './job-posting-create.component';

describe('JobPostingCreateComponent', () => {
  let component: JobPostingCreateComponent;
  let fixture: ComponentFixture<JobPostingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostingCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
