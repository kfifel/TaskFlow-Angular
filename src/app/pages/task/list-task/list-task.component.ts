import { Component, OnInit } from '@angular/core';
import {ITask} from "../task.model";
import {Store} from "@ngrx/store";
import {getIsLoadingTask, State} from "../state/task.reducer";
import * as TaskActions from "../state/task.actions";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  tasks: ITask[];
  breadCrumbItems: Array<{}> =  [{ label: 'Tasks', link: "/tasks" }, { label: 'Overview', active: true }];
  query: string;
  isLoading: boolean;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(getIsLoadingTask).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  toggleTasks() {
    this.store.dispatch(TaskActions.toggleIsLoading());
  }
}
