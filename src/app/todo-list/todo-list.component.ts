import { ChangeDetectorRef, Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: {
[x: string]: any; task: string, completed: boolean, date:Date 
}[] = [];
  private clearSubscription: Subscription | any;

  appStatus = new Promise((res,rej)=>{
    setTimeout(() => {
      res("helloooo")
    }, 2000);
  })
  para:string="Hi iam shafeek"
  number:number= 10.222222

  constructor(
    private todoService: TodoServiceService,
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.todoService.getList().subscribe((data) => {
      
      this.todoList = data;
   
    
  });
  }

  removiList(index: number) {
    this.todoService.remove(index);
  }

  completd(id:number){
    console.log(id)
    this.todoService.toggle(id)
  }
  toggleOn(id: number) {
    console.log(id)
    this.todoService.toggle(id);
  }

  clearAll() {
  
  this.todoService.clear().subscribe((data)=>{
    this.todoList = data
  })
  }
  selectedGender: string = 'female';
selected:boolean=true
  toggleGender() {
    this.selected = this.selected === true?false:true
    this.selectedGender = this.selectedGender === 'male' ? 'female' : 'male';
  }

  
  
}
