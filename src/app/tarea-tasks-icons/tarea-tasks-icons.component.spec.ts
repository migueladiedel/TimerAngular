import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaTasksIconsComponent } from './tarea-tasks-icons.component';

describe('TareaTasksIconsComponent', () => {
  let component: TareaTasksIconsComponent;
  let fixture: ComponentFixture<TareaTasksIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaTasksIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaTasksIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
