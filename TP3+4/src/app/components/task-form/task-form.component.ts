import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from "../tasks-list/tasks-list.component";
import { Task } from '../../constants/tasks.interface';


@Component({
    selector: 'app-task-form',
    standalone: true,
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.css',
    imports: [FormsModule, TasksListComponent]
})
export class TaskFormComponent {
  tasks: Task[] = [];
  newTask: string = '';
  constructor() { }
  ngOnInit(): void {
  }
  addTask() {
  if (this.newTask.trim() !== '') {
  const newTask: Task = {
  name: this.newTask,
  completed: false
  };
  this.tasks.push(newTask);
  this.newTask = '';
  }
  }

}
