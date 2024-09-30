import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent], // Non-independent components.
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // Independent components.
})
export class AppModule {}
