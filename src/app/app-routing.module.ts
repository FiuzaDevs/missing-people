import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { PersonResolve } from './resolvers/get-person-by-id.resolver';

const routes: Routes = [
  {path: '', component: ListPeopleComponent},
  {path: 'person/:id', component: PersonDetailsComponent, resolve: {person: PersonResolve}},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
