import { Component, Input } from '@angular/core';
import { Task } from '../../store/tasks/tasks.model';

@Component({
  selector: 'app-kanban-task-card',
  imports: [],
  templateUrl: './kanban-task-card.html',
  styleUrl: './kanban-task-card.scss'
})
export class KanbanTaskCard {
  @Input({required: true}) task!: Task
}
