import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  task:string = ''
  constructor(private todoservide:TodoServiceService){

  }

  addNewTask(task:string){
    this.todoservide.addNewTask(task)
    this.task = ''
  }
}
