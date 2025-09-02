export interface Task{
    id: string;
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'Done';
    reportedId: string;
    assigneedId: string;
}

export interface TasksState{
    tasks: Task[];
    isLoading: boolean;
    error: string | null;
}