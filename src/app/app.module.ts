import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { MissingPeopleService } from './services/missing-people.service';
import { PersonResolve } from './resolvers/get-person-by-id.resolver';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    MissingPeopleService,
    PersonResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
