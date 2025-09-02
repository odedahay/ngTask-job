import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./tasks.model";

export const selectTasksState = createFeatureSelector<TasksState>('tasks');

export const selectAllTasks = createSelector(
    selectTasksState,
    (state) => state.tasks
);

export const selectTodoTasks = createSelector(
    selectAllTasks,
    (tasks) => tasks.filter(task => task.status === 'To Do')
);

export const selectInProgressTasks = createSelector(
    selectAllTasks,
    (tasks) => tasks.filter(task => task.status === 'In Progress')
);

export const selectDoneTask = createSelector(
    selectAllTasks,
    (tasks) => tasks.filter(task => task.status === 'Done')
);