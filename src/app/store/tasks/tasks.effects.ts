import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "./task.service";
import { TaskActions } from "./tasks.actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class TasksEffects {
    private actions$ = inject(Actions);
    private taskService = inject(TaskService);

    loadTasks$ = createEffect(() => this.actions$.pipe(
        ofType(TaskActions.loadTasks),
        switchMap(() =>
            this.taskService.getTasks().pipe(
                map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
                catchError((error) => of(TaskActions.loadTasksFailure({ error: error.message })))
            ))
    ));

    // addEffect
    addTask = createEffect(() => this.actions$.pipe(
        ofType(TaskActions.addTask),
        switchMap(({ taskData }) => this.taskService.addTask(taskData).pipe(
            map((docRef) => TaskActions.addTaskSuccess({
                task: {
                    ...taskData,
                    id: docRef.id
                }
            })),
            catchError((error) => of(TaskActions.addTaskFailure({ error: error.message })))
        ))
    ));

    // update
    updateTask$ = createEffect(()=> this.actions$.pipe(
        ofType(TaskActions.updateTask),
        switchMap(({ task })=> this.taskService.updateTask(task).pipe(
            map(()=> TaskActions.updateTaskSuccess({ task })),
            catchError((error) => of(TaskActions.updateTaskFailure({ error: error.message })))
        ))
    ))

    // delete
    deleteTask$ = createEffect(()=> this.actions$.pipe(
        ofType(TaskActions.deleteTask),
        switchMap(({ taskId }) => this.taskService.deleteTask(taskId).pipe(
            map(()=> TaskActions.deleteTaskSuccess({ taskId })),
            catchError((error)=> of(TaskActions.deleteTaskFailure({ error: error.message })))
        ))
    ));
}