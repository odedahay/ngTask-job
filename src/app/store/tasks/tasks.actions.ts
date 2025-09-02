
// loading
import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Task } from "./tasks.model";

export const TaskActions = createActionGroup({
    source: 'Tasks',
    events: {
        'Load Tasks': emptyProps(),
        'Load Tasks Success' : props<{tasks: Task[]}>(),
        'Load Tasks Failure' : props<{error: string}>(),
    }
});