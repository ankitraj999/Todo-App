import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private taskservice:TaskService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id:[],
      task: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
       action: ['', Validators.required]
    });
    let taskid=localStorage.getItem("edittaskId")

    this.taskservice.gettaskById(parseInt(taskid)).subscribe(data=>this.editForm.setValue(data));
  }
  onSubmit3(){
    this.taskservice.editTask(this.editForm.value).subscribe();
    this.taskservice.getTask().subscribe();
    this.router.navigate(['list'])
  }
}
