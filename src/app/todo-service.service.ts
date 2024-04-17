import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoList: { task: string, completed: boolean, date:Date }[] = [
    { task: 'Task 1', completed: false, date:new Date(15,1,2024) },
    { task: 'Task 2', completed: true,date:new Date(15,1,2024) },
  ];
  

  constructor() {}

  addNewTask(task:string): void {
    const todo = {task:task,completed:false, date: new Date()}
   this.todoList.push(todo)
    console.log('Added new task:', task);
  }

  remove(index: number): void {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1);
      console.log('Removed task at index:', index);
      console.log('Updated todoList:', this.todoList);
    }
  }

  getList() {

    return of(this.todoList); // Return an observable
  }

  toggle(id: any): void {
    this.todoList = this.todoList.map((v, i) => {
      if (i === id) {
        v.completed = !v.completed;
      }
      return v;
    });
    console.log('Toggled task at index:', id);
    console.log('Updated todoList:', this.todoList);
  }

  clear() {
    // Clear the list and emit a new value
    this.todoList = []
    return this.getList()
  }
}
