import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanAddEditTask } from './kanban-add-edit-task';

describe('KanbanAddEditTask', () => {
  let component: KanbanAddEditTask;
  let fixture: ComponentFixture<KanbanAddEditTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanAddEditTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanAddEditTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
