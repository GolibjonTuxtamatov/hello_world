import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration(),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
