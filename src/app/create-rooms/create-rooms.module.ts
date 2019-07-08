import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomsComponent } from './create-rooms.component';
import {CreateRoomsRoutingModule} from "./create-rooms.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CreateRoomsRoutingModule
  ],
  declarations: [CreateRoomsComponent]
})
export class CreateRoomsModule { }
