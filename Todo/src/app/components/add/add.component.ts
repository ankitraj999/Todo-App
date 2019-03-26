import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;


  constructor(private formBuilder:FormBuilder,private router:Router,private taskservice:TaskService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[],
      task: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
       action: ['', Validators.required]
    });
  }

  onSubmit2(){

   this.taskservice.addTask(this.addForm.value).subscribe()
   this.taskservice.getTask().subscribe()
   this.router.navigate(['list'])
  }
}
