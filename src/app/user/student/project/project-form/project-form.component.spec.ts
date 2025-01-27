import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectFormComponent } from './project-form.component';

describe('StudentProjectFormComponent', () => {
  let component: StudentProjectFormComponent;
  let fixture: ComponentFixture<StudentProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProjectFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
