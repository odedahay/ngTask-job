import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "./task.service";
import { TaskActions } from "./tasks.actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class TasksEffects {
    private actions$ = inject(Actions);
    private taskService = inject(TaskService);

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            switchMap(() =>
                this.taskService.getTasks().pipe(
                    map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
                    catchError((error) => of(TaskActions.loadTasksFailure({ error: error.message })))
                ))
        ));
}