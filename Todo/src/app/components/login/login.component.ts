import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { New } from 'src/app/model/new';
//import { UserService } from 'src/app/services/user.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userarray:New[]=[]
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  
  constructor(private formBulider: FormBuilder,
    private router: Router,private userservice:TaskService) { 
    
  }

  onSubmit() {
    this.submitted = true;
    // If validation failed, it should return to Validate again
    if (this.loginForm.invalid) {
      return;
    }

    let username= this.loginForm.controls.email.value;
    
    let password=this.loginForm.controls.password.value;
    
    let flag=0
    for(let i=0;i<this.userarray.length;i++){
      if(username==this.userarray[i].email && password==this.userarray[i].password)
        {
      
          flag=1
          break;
        }
        
    }
    
    if (this.loginForm.controls.email.value
      == "ankit@gmail.com" &&
      this.loginForm.controls.password.value == "12345") {
      localStorage.setItem("username", username);
      this.router.navigate(['list']);
    }
    else if(flag){
      //alert(flag)
      this.router.navigate(['list']);
    }
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBulider.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userservice.getUser().subscribe(data=>{this.userarray=data})
  }

}




