import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {
  
  signupForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;


  constructor(private formBuilder:FormBuilder,private router:Router,private taskservice:TaskService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      id:[],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit1(){

   this.taskservice.addUser(this.signupForm.value).subscribe()
   this.taskservice.getUser().subscribe()
   this.router.navigate(['login'])
  }


}
