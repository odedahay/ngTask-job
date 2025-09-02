import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DragDropModule} from '@angular/cdk/drag-drop'

import { KanbanTaskCard } from '../kanban-task-card/kanban-task-card';
import { Task } from '../../store/tasks/tasks.model';
import { TaskActions } from '../../store/tasks/tasks.actions';
import { selectDoneTask, selectInProgressTasks, selectTodoTasks } from '../../store/tasks/tasks.selectors';


@Component({
  selector: 'app-kanban-board',
  imports: [CommonModule, KanbanTaskCard, DragDropModule],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss'
})
export class KanbanBoard implements OnInit {
  private store = inject(Store);

  todoTasks$ : Observable<Task[]> = this.store.select(selectTodoTasks);
  inProgressTasks$: Observable<Task[]> = this.store.select(selectInProgressTasks);
  doneTasks$: Observable<Task[]> = this.store.select(selectDoneTask);

  ngOnInit():void{
    this.store.dispatch(TaskActions.loadTasks());
  }
}
