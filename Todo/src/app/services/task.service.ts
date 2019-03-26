import { Injectable } from '@angular/core';
import { Task } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { New } from '../model/new';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseurl:string="http://localhost:3000/todo"
  userurl:string="http://localhost:3000/users"
  constructor( private http:HttpClient) { }
  getTask(){
    return this.http.get<Task[]>(this.baseurl);
  }
  getUser(){
    return this.http.get<New[]>(this.userurl);
  }
  //delete user by id
  deleteTask(id:number){
    return this.http.delete(this.baseurl + "/" +id)
  }
  addTask(task:Task){
    return this.http.post(this.baseurl,task);
  }
  addUser(user:New){
    return this.http.post(this.userurl,user);
  }
  // Get users by id
  gettaskById(id :number){
    return this.http.get<Task>(this.baseurl+"/" +id)
  }
  editTask(task:Task){
    return  this.http.put<Task>(this.baseurl+"/" +task.id, task);
  }
}


