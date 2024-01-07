import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TaskService} from "../service/task.service";
import * as TaskActions from "./task.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class TaskEffects {


  constructor(private actions$: Actions,
              private taskService: TaskService) {
  }

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(action =>
        this.taskService.getAllTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({tasks})),
          //catchError((err) => TaskActions.loadTasksError(err))
        )
      )
    )
  });
}
