import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingnupComponent } from './components/singnup/singnup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'useradd',component:AddComponent},
  {path:'taskedit',component:UpdateComponent},
  {path:'list',component:ListComponent},
  {path:'signup',component:SingnupComponent},
  {path:'login',component:LoginComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
