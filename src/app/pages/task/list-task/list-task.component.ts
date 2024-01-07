import { Component, OnInit } from '@angular/core';
import {ITask} from "../task.model";
import {Store} from "@ngrx/store";
import {getIsLoadingTask, getTasks, State} from "../state/task.reducer";
import * as TaskActions from "../state/task.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  tasks$: Observable<ITask[]>;
  breadCrumbItems: Array<{}> =  [{ label: 'Tasks', link: "/tasks" }, { label: 'Overview', active: true }];
  query: string;
  isLoading: boolean;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(getIsLoadingTask).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.store.dispatch(TaskActions.loadTasks());

    this.tasks$ = this.store.select(getTasks);
  }

  toggleTasks() {
    this.store.dispatch(TaskActions.toggleIsLoading());
  }
}
