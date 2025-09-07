import { createReducer, on } from "@ngrx/store";
import { TasksState } from "./tasks.model";
import { TaskActions } from "./tasks.actions";


export const initialState: TasksState = {
    tasks: [],
    isLoading: false,
    error: null
};

export const tasksReducer = createReducer(
    initialState,
    on(TaskActions.loadTasks, (state)=> ({
        ...state,
        isLoading: true
    })),
    
    on(TaskActions.loadTasksSuccess, (state, {tasks}) => ({
        ...state,
        tasks,
        isLoading: false
    })),

    on(TaskActions.loadTasksFailure, (state, {error})=>({
        ...state,
        isLoading: false,
        error
    })),

    on(TaskActions.addTaskSuccess, (state, {task})=>({
       ...state,
       task : [ ...state.tasks, task]
    })),

    on(TaskActions.updateTaskSuccess, (state, {task})=> ({
        ...state,
        tasks: state.tasks.map( (t)=> (t.id === task.id ? { ...t, ...task} : t))
    })),

   on(TaskActions.deleteTaskSuccess, (state, {taskId})=>({
    ...state,
    tasks: state.tasks.filter((t) => t.id !== taskId)
   })),

   on(TaskActions.addTaskFailure, TaskActions.updateTaskFailure, TaskActions.deleteTaskFailure, (state, {error}) =>({
    ...state,
    error
   }))
);