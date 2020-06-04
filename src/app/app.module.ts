import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponentComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
