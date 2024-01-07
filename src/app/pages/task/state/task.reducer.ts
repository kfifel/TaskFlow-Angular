import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {ITask} from "../task.model";
import * as AppState from '../../../state/app.state';
import * as TaskActions from './task.actions';


export interface State extends AppState.State {
  tasks: TaskState;
}

export interface TaskState {
  isLoading: boolean;
  tasks: ITask[];
  currentTask: ITask;
}

const initialState: TaskState =   {
  isLoading: true,
  currentTask: null,
  tasks: [],
};

const getTaskFeatureState = createFeatureSelector<TaskState>('tasks');

export const getIsLoadingTask = createSelector(
  getTaskFeatureState,
  state => state.isLoading
);

export const getTasks = createSelector(
  getTaskFeatureState,
  state => state.tasks
);

export const getCurrentTask = createSelector(
  getTaskFeatureState,
  state => state.currentTask
);

export const taskReducer = createReducer<TaskState>(
  initialState,

  on(TaskActions.toggleIsLoading, (state): TaskState => {
    return {
      ...state,
      isLoading: !state.isLoading
    };
  }),

  on(TaskActions.addTask, (state, action): TaskState => {
    return {
      ...state,
      tasks: [...state.tasks, action.task]
    }
  }),

  on(TaskActions.claireCurrentTask, (state): TaskState => {
    return {
      ...state,
      currentTask: null
    }
  }),

  on(TaskActions.loadTasksSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks
    }
  }),
);
