import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestosComponent } from './list-restos/list-restos.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {path: 'create-restaurant', component: AddRestoComponent},
  {path: 'list-restaurants', component: ListRestosComponent},
  {path: 'update-restaurant/:id', component: UpdateRestoComponent},
  {path: '**',  component: ListRestosComponent},
  {path: '', redirectTo: '/list-restaurants', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
