import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ITask} from "../task.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: "root"
})
export class TaskService {

  private apiUrl = environment.baseUrl + '/api/v1/task';

  constructor(private http: HttpClient) {
  }

  getAllTask(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }
}
