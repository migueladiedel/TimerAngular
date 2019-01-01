import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskIconsComponent } from './task-icons.component';


describe('HomeComponent', () => {
  let component: TaskIconsComponent;
  let fixture: ComponentFixture<TaskIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
