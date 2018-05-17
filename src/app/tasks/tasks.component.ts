import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  task: Task = {
    id: 1,
    name: 'Task 1',
    summary: 'Build out this API'
  };

  tasks = TASKS;

  constructor() { }

  ngOnInit() {
  }

}
