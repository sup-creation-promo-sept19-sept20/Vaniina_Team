import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRoomsComponent} from "./create-rooms.component";

const routes: Routes = [
  {
    path: '',
    component: CreateRoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoomsRoutingModule { }
