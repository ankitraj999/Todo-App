import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private taskService: TaskService, private router: Router) { }

  taskfile:Task[];
  
  ngOnInit() {

    if(localStorage.getItem("username")!=null){
      this.taskService.getTask().subscribe(data=>
        {this.taskfile = data;
      });
    }
    else{
      this.router.navigate(['/login']);
    }
    
  }

  deleteTaskList(task:Task) : void{
    let result = confirm("do you want to delete?")
    if(result){
      this.taskService.deleteTask(task.id).subscribe(data => {
        this.taskfile = this.taskfile.filter(u => u !==task);
      })
    }
  }



  editTaskList(task:Task):void{

    localStorage.removeItem("edittaskId");
    
    localStorage.setItem("edittaskId",
      task.id.toString());
    
    this.router.navigate(['taskedit']);
    
    }
 
  logOutUser():void{

    if(localStorage.getItem("username")!=null){
    
    localStorage.removeItem("username");
    
    this.router.navigate(['/login']);
    
    }
    
   
    }
    addUser(){
      this.router.navigate(["useradd"])
    }
}
