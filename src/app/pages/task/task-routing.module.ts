import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListTaskComponent} from "./list-task/list-task.component";
import {AddTaskComponent} from "./add-task/add-task.component";

const routes: Routes = [
  { path: '', component: ListTaskComponent },
  { path: 'new', component: AddTaskComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }
