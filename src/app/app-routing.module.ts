import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Employees } from '../employees';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
  	path: 'employees',
  	component: Employees
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
