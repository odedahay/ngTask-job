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
    }))
);