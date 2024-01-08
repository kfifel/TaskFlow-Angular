import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {ITask} from "../task.model";
import * as AppState from '../../../state/app.state';
import * as TaskActions from './task.actions';
import {Tag} from "../../tag/tag.model";


export interface State extends AppState.State {
  tasks: TaskState;
}

export interface TaskState {
  isLoading: boolean;
  tasks: ITask[];
  currentTaskId: number | null;
  error: string;
}

const initialState: TaskState =   {
  isLoading: true,
  currentTaskId: null,
  tasks: [],
  error: ''
};

export const taskReducer = createReducer<TaskState>(
  initialState,

  on(TaskActions.toggleIsLoading, (state): TaskState => {
    return {
      ...state,
      isLoading: !state.isLoading
    };
  }),

  on(TaskActions.saveTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      error: ''
    }
  }),

  on(TaskActions.saveTaskError, (state, action): TaskState => {
    return {
      ...state,
      error: action.error
    }
  }),

  on(TaskActions.claireCurrentTask, (state): TaskState => {
    return {
      ...state,
      currentTaskId: null
    }
  }),

  on(TaskActions.loadTasksSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks,
      error: ''
    }
  }),
);
