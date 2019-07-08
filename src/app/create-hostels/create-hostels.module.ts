import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHostelsComponent } from './create-hostels.component';
import {CreateHostelsRoutingModule} from "./create-hostels.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CreateHostelsRoutingModule
  ],
  declarations: [CreateHostelsComponent]
})
export class CreateHostelsModule { }
