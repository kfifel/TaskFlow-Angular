import {createAction, props} from "@ngrx/store";
import {ITask} from "../task.model";


export const toggleIsLoading =
  createAction('[Task] Is Loading');

export const addTask =
  createAction('[Task] Add New Task', props<{task: ITask}>());

export const claireCurrentTask =
  createAction('[Task] Claire Current Task');

export const loadTasks =
  createAction('[Task] Load');

export const loadTasksSuccess =
  createAction('[Task] Load Success', props<{ tasks: ITask[] }>());

export const loadTasksError =
  createAction('[Task] Load Fail', props<{ message: string }>());
