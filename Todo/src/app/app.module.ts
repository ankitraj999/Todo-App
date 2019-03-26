import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingnupComponent } from './components/singnup/singnup.component';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './component/userlist/userlist.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SingnupComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
