import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserformComponent } from './userform/userform.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard',      component: DashboardComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

